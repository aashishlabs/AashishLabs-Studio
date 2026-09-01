export type AnalyticsEventName =
  | "page_view"
  | "cta_click"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "form_start"
  | "form_error"
  | "generate_lead"
  | "case_study_view"
  | "service_view"
  | "scroll_depth";

export type AnalyticsPayload = Record<
  string,
  string | number | boolean | undefined | string[]
>;

declare global {
  interface Window {
    gtag?: {
      (command: "event", eventName: string, payload?: AnalyticsPayload): void;
      (
        command: "consent",
        action: "default" | "update",
        payload: Record<string, "granted" | "denied" | number>,
      ): void;
    };
    clarity?: (
      command: string,
      eventName: string,
      payload?: AnalyticsPayload,
    ) => void;
  }
}

export function trackEvent(
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, payload);
  window.clarity?.("event", name, payload);
}
