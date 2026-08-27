import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secret = process.env.CRM_WEBHOOK_SECRET;
  const provided = request.headers.get("x-webhook-secret");

  if (!secret || provided !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    message: "CRM webhook relay placeholder. Configure CRM_WEBHOOK_URL before enabling forwarding."
  });
}
