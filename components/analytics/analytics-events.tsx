"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics/events";

const customEvents: AnalyticsEventName[] = ["form_start", "generate_lead", "form_error"];

export function AnalyticsEvents() {
  useEffect(() => {
    const listeners = customEvents.map((eventName) => {
      const listener = (event: Event) => {
        const detail = event instanceof CustomEvent ? event.detail : {};
        trackEvent(eventName, detail);
      };
      window.addEventListener(eventName, listener);
      return () => window.removeEventListener(eventName, listener);
    });

    return () => {
      listeners.forEach((dispose) => dispose());
    };
  }, []);

  return null;
}
