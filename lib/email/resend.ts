import { Resend } from "resend";
import type { LeadPayload } from "@/lib/validation/lead";

export async function sendLeadNotification(lead: LeadPayload, leadId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_TO;

  if (!apiKey || !to) {
    return { status: "skipped" as const, reason: "Resend environment variables missing" };
  }

  const resend = new Resend(apiKey);
  const subject = `New project enquiry: ${lead.fullName}`;
  const serviceInterest = lead.serviceInterest.join(", ");

  const { error } = await resend.emails.send({
    from: "Leads <onboarding@resend.dev>",
    to,
    replyTo: lead.email,
    subject,
    text: [
      `Lead ID: ${leadId}`,
      `Name: ${lead.fullName}`,
      `Business: ${lead.businessName || "Not provided"}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone}`,
      `Services: ${serviceInterest}`,
      `Budget: ${lead.budgetRange || "Not provided"}`,
      `Timeline: ${lead.timeline || "Not provided"}`,
      "",
      lead.message
    ].join("\n")
  });

  if (error) {
    throw new Error(`Resend email failed: ${error.message}`);
  }

  return { status: "sent" as const };
}
