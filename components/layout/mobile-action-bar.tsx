"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function MobileActionBar() {
  const pathname = usePathname();
  const [visibility, setVisibility] = useState({
    pathname: "",
    visible: false,
  });

  useEffect(() => {
    if (pathname === "/contact") return;

    const mobile = window.matchMedia("(max-width: 768px)");
    const guards = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-mobile-action-guard], .site-footer",
      ),
    );
    let frame = 0;
    const update = () => {
      const nearGuard = guards.some((guard) => {
        const rect = guard.getBoundingClientRect();
        return rect.bottom > 80 && rect.top < window.innerHeight + 96;
      });
      const focused = document.activeElement;
      const editing =
        focused instanceof HTMLElement &&
        focused.matches("input, textarea, select, [contenteditable=true]");
      const visible =
        mobile.matches && window.scrollY > 240 && !nearGuard && !editing;
      setVisibility((previous) =>
        previous.pathname === pathname && previous.visible === visible
          ? previous
          : { pathname, visible },
      );
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(schedule, { rootMargin: "96px" });
    guards.forEach((guard) => observer.observe(guard));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("focusin", schedule);
    document.addEventListener("focusout", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("focusin", schedule);
      document.removeEventListener("focusout", schedule);
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
      className="mobile-action-bar pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 min-[769px]:hidden"
    >
      <div className="mx-auto flex max-w-sm justify-center">
        <Link
          href="/contact"
          className="focus-ring mobile-action-cta pointer-events-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/35 bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_14px_40px_-18px_hsl(var(--primary))] backdrop-blur-xl"
        >
          Start a Project
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
