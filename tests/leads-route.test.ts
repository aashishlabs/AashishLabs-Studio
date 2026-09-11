import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  sendLeadNotification: vi.fn(),
  createSupabaseAdminClient: vi.fn(),
  verifyTurnstileToken: vi.fn(),
}));

vi.mock("@/lib/email/resend", () => ({
  sendLeadNotification: mocks.sendLeadNotification,
}));

vi.mock("@/lib/supabase/server", () => ({
  createSupabaseAdminClient: mocks.createSupabaseAdminClient,
}));

vi.mock("@/lib/security/turnstile", () => ({
  verifyTurnstileToken: mocks.verifyTurnstileToken,
}));

import { POST } from "../app/api/leads/route";

const validLead = {
  fullName: "QA Enquiry",
  businessName: "AashishLabs QA",
  email: "qa@example.com",
  phone: "+919999999999",
  serviceInterest: ["web-development"],
  budgetRange: "INR 50k - 1L",
  timeline: "1-3 months",
  message: "Verify the production-safe inquiry notification flow.",
  consent: true,
  honeypot: "",
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubEnv("TURNSTILE_SECRET_KEY", "");

  mocks.createSupabaseAdminClient.mockReturnValue(createSupabaseMock());
});

describe("lead notification response", () => {
  it("returns a user-safe error when lead storage is unavailable", async () => {
    mocks.createSupabaseAdminClient.mockReturnValue(null);

    const response = await POST(createLeadRequest());
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.error).toContain("cannot submit your enquiry");
    expect(mocks.sendLeadNotification).not.toHaveBeenCalled();
  });

  it("returns a user-safe error when Supabase cannot be reached", async () => {
    mocks.createSupabaseAdminClient.mockReturnValue(
      createSupabaseMock({
        data: null,
        error: {
          code: "",
          message: "TypeError: fetch failed",
          details: "getaddrinfo ENOTFOUND project.supabase.co",
          hint: "",
        },
      }),
    );

    const response = await POST(createLeadRequest());
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toContain("cannot submit your enquiry");
    expect(mocks.sendLeadNotification).not.toHaveBeenCalled();
  });

  it("returns a complete success after email delivery", async () => {
    mocks.sendLeadNotification.mockResolvedValue({ status: "sent" });

    const response = await POST(createLeadRequest());

    expect(response.status).toBe(201);
    await expect(response.json()).resolves.toMatchObject({
      success: true,
      leadId: "lead-123",
      notificationStatus: "sent",
    });
  });

  it("reports when notification configuration is missing", async () => {
    mocks.sendLeadNotification.mockResolvedValue({
      status: "skipped",
      reason: "Resend environment variables missing",
    });

    const response = await POST(createLeadRequest());
    const body = await response.json();

    expect(response.status).toBe(202);
    expect(body).toMatchObject({
      success: true,
      leadId: "lead-123",
      notificationStatus: "skipped",
    });
    expect(body.warning).toContain("enquiry was saved");
  });

  it("reports a provider delivery failure without losing the stored lead", async () => {
    mocks.sendLeadNotification.mockRejectedValue(
      new Error("Resend email failed"),
    );

    const response = await POST(createLeadRequest());
    const body = await response.json();

    expect(response.status).toBe(202);
    expect(body.notificationStatus).toBe("failed");
    expect(body.warning).toContain("enquiry was saved");
  });
});

function createLeadRequest() {
  return new Request("http://localhost/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validLead),
  });
}

function createSupabaseMock(
  insertResult = {
    data: { id: "lead-123" } as { id: string } | null,
    error: null as {
      code: string;
      message: string;
      details: string;
      hint: string;
    } | null,
  },
) {
  return {
    from: vi.fn(() => ({
      insert: vi.fn(() => ({
        select: vi.fn(() => ({
          single: vi.fn().mockResolvedValue(insertResult),
        })),
      })),
      update: vi.fn(() => ({
        eq: vi.fn().mockResolvedValue({ error: null }),
      })),
    })),
  };
}
