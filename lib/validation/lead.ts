import { z } from "zod";
import { services } from "../../content/site";

const serviceSlugs = services.map((service) => service.slug);

export const leadSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(80, "Keep the name under 80 characters."),
  businessName: z.string().trim().max(120, "Keep the business name under 120 characters.").optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email.").transform((value) => value.toLowerCase()),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\-.\s0-9]{8,20}$/, "Enter a valid phone number."),
  serviceInterest: z
    .array(z.string())
    .min(1, "Select at least one service.")
    .refine((items) => items.every((item) => serviceSlugs.includes(item)), "Select a valid service."),
  budgetRange: z.string().trim().max(80).optional().or(z.literal("")),
  timeline: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more about the project.").max(2000),
  consent: z.boolean().refine((value) => value === true, "Consent is required before submitting."),
  honeypot: z.string().optional(),
  turnstileToken: z.string().optional(),
  landingPage: z.string().url().optional().or(z.literal("")),
  referrer: z.string().url().optional().or(z.literal("")),
  utm: z
    .object({
      source: z.string().optional(),
      medium: z.string().optional(),
      campaign: z.string().optional(),
      term: z.string().optional(),
      content: z.string().optional()
    })
    .optional()
});

export type LeadInput = z.input<typeof leadSchema>;
export type LeadPayload = z.output<typeof leadSchema>;

export const budgetRanges = ["Not sure yet", "Under INR 50k", "INR 50k - 1L", "INR 1L - 3L", "INR 3L+"] as const;
export const timelines = ["Urgent", "2-4 weeks", "1-3 months", "Flexible"] as const;
