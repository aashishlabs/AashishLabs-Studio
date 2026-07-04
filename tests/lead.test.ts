import { describe, expect, it } from "vitest";
import { extractUtm, normalizePhone } from "../lib/lead/normalize";
import { leadSchema } from "../lib/validation/lead";

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
});
