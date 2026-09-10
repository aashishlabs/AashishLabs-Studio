import { afterEach, describe, expect, it, vi } from "vitest";
import { extractUtm, normalizePhone } from "../lib/lead/normalize";
import { getSupabaseServerConfig } from "../lib/supabase/server";
import { leadSchema } from "../lib/validation/lead";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("lead utilities", () => {
  it("normalizes phone punctuation", () => {
    expect(normalizePhone("+91 (99999) 99999")).toBe("+919999999999");
  });

  it("extracts utm parameters", () => {
    const params = new URLSearchParams("utm_source=google&utm_medium=cpc&utm_campaign=launch");
    expect(extractUtm(params)).toEqual({
      source: "google",
      medium: "cpc",
      campaign: "launch",
      term: undefined,
      content: undefined
    });
  });

  it("accepts a valid lead", () => {
    const parsed = leadSchema.safeParse({
      fullName: "Example Name",
      businessName: "Example Business",
      email: "Name@Example.com",
      phone: "+919999999999",
      serviceInterest: ["web-development"],
      budgetRange: "INR 50k - 1L",
      timeline: "1-3 months",
      message: "Need a lead-generation website for a local business.",
      consent: true,
      honeypot: ""
    });

    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.email).toBe("name@example.com");
    }
  });

  it("rejects missing consent", () => {
    const parsed = leadSchema.safeParse({
      fullName: "Example Name",
      email: "name@example.com",
      phone: "+919999999999",
      serviceInterest: ["web-development"],
      message: "Need a lead-generation website.",
      consent: false
    });

    expect(parsed.success).toBe(false);
  });

  it("supports the legacy production Supabase service role variable", () => {
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("SUPABASE_SECRET_KEY", "");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "legacy-secret");

    expect(getSupabaseServerConfig()).toEqual({
      url: "https://example.supabase.co",
      key: "legacy-secret",
    });
  });

  it("prefers the current Supabase secret variable", () => {
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("SUPABASE_SECRET_KEY", "current-secret");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "legacy-secret");

    expect(getSupabaseServerConfig()).toEqual({
      url: "https://example.supabase.co",
      key: "current-secret",
    });
  });
});
