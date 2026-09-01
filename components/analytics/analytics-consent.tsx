"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const consentStorageKey = "aashishlabs_analytics_consent";

type ConsentChoice = "granted" | "denied";

export function AnalyticsConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setIsOpen(!localStorage.getItem(consentStorageKey));
      } catch {
        setIsOpen(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function chooseAnalyticsConsent(choice: ConsentChoice) {
    try {
      localStorage.setItem(consentStorageKey, choice);
    } catch {
      // Consent mode is still updated for the current page when storage is unavailable.
    }

    window.gtag?.("consent", "update", {
      analytics_storage: choice,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Analytics preferences"
      className="fixed inset-x-4 bottom-24 z-[60] mx-auto max-w-2xl rounded-xl border border-white/15 bg-[#0B1628]/95 p-5 shadow-2xl backdrop-blur-xl sm:bottom-5"
    >
      <p className="font-display text-lg font-semibold text-foreground">
        Help us improve AashishLabs
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        We would like to use Google Analytics to understand website traffic and
        successful enquiries. Analytics stays off unless you allow it. Read our{" "}
        <Link
          href="/privacy-policy"
          className="text-primary underline-offset-4 hover:underline"
        >
          privacy policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={() => chooseAnalyticsConsent("denied")}
        >
          Decline analytics
        </Button>
        <Button type="button" onClick={() => chooseAnalyticsConsent("granted")}>
          Allow analytics
        </Button>
      </div>
    </aside>
  );
}
