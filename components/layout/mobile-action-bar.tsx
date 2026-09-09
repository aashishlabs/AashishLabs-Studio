"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function MobileActionBar() {
  const pathname = usePathname();
  const [visibility, setVisibility] = useState({
    pathname: "",
    visible: false,
  });

  useEffect(() => {
    if (pathname === "/contact") return;

    let cancelled = false;
    const guards = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-mobile-action-guard], .site-footer",
      ),
    );
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        if (cancelled) return;
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        }
        setVisibility({
          pathname,
          visible: intersecting.size === 0,
        });
      },
      { rootMargin: "0px 0px -72px", threshold: 0.01 },
    );
    guards.forEach((guard) => observer.observe(guard));
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [pathname]);

  if (
    pathname === "/contact" ||
    visibility.pathname !== pathname ||
    !visibility.visible
  )
    return null;

  return (
    <div
      aria-label="Quick contact"
      role="region"
      className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/92 px-3 py-2.5 shadow-[0_-12px_35px_-24px_hsl(var(--foreground)/0.45)] backdrop-blur-xl sm:hidden"
    >
      <div className="mx-auto grid max-w-sm grid-cols-[1.15fr_0.85fr] gap-2">
        <Link
          href="/contact"
          className="focus-ring mobile-action flex min-h-11 items-center justify-center rounded-lg bg-primary px-3 text-sm font-semibold text-primary-foreground"
        >
          Start a Project
        </Link>
        <a
          href={siteConfig.contact.whatsappUrl}
          className="focus-ring mobile-action flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 text-sm font-semibold text-secondary-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
