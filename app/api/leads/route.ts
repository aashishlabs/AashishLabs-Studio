import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email/resend";
import { sha256Hash } from "@/lib/lead/hash";
import { normalizePhone } from "@/lib/lead/normalize";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { leadSchema } from "@/lib/validation/lead";

export const runtime = "edge";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json({ error: "Too many attempts. Please retry later." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the highlighted fields." }, { status: 400 });
  }

  const lead = parsed.data;

  if (lead.honeypot) {
    return NextResponse.json({ success: true, leadId: "accepted" }, { status: 201 });
  }

  const turnstileEnabled = Boolean(process.env.TURNSTILE_SECRET_KEY);
  if (turnstileEnabled && !lead.turnstileToken) {
    return NextResponse.json({ error: "Spam protection check failed." }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: "Lead storage is not configured yet." }, { status: 503 });
  }

  const ipHash = ip === "unknown" ? null : await sha256Hash(ip);
  const userAgent = request.headers.get("user-agent") || "";
  const userAgentHash = userAgent ? await sha256Hash(userAgent) : null;

  const insertPayload = {
    full_name: lead.fullName,
    business_name: lead.businessName || null,
    email: lead.email,
    phone: normalizePhone(lead.phone),
    service_interest: lead.serviceInterest,
    budget_range: lead.budgetRange || null,
    timeline: lead.timeline || null,
    message: lead.message,
    consent_at: new Date().toISOString(),
    landing_page: lead.landingPage || null,
    referrer: lead.referrer || null,
    utm_source: lead.utm?.source || null,
    utm_medium: lead.utm?.medium || null,
    utm_campaign: lead.utm?.campaign || null,
    utm_term: lead.utm?.term || null,
    utm_content: lead.utm?.content || null,
    user_agent_hash: userAgentHash,
    ip_hash: ipHash,
    status: "new",
    notification_status: "pending"
  };

  const { data, error } = await supabase.from("lead").insert(insertPayload).select("id").single();
  if (error || !data?.id) {
    return NextResponse.json({ error: "Unable to save this enquiry right now." }, { status: 500 });
  }

  let notificationStatus = "sent";
  try {
    const notification = await sendLeadNotification(lead, data.id);
    notificationStatus = notification.status === "skipped" ? "skipped" : "sent";
  } catch {
    notificationStatus = "failed";
  }

  await supabase.from("lead").update({ notification_status: notificationStatus }).eq("id", data.id);

  return NextResponse.json({ success: true, leadId: data.id }, { status: 201 });
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 8;
  const current = rateLimit.get(key);

  if (!current || current.resetAt < now) {
    rateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  current.count += 1;
  return { ok: current.count <= max };
}
