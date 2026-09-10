"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function MobileActionBar() {
  const pathname = usePathname();
  const action = useRef<HTMLAnchorElement>(null);
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
    const collisionTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main h1, main h2, main h3, main p, main li, main summary, main button, main input, main textarea, main select, main a",
      ),
    );
    let frame = 0;
    const update = () => {
      const nearGuard = guards.some((guard) => {
        const rect = guard.getBoundingClientRect();
        return rect.bottom > -72 && rect.top < window.innerHeight + 72;
      });
      const focused = document.activeElement;
      const editing =
        focused instanceof HTMLElement &&
        focused.matches("input, textarea, select, [contenteditable=true]");
      const actionRect = action.current?.getBoundingClientRect();
      const collides = actionRect
        ? collisionTargets.some((target) => {
            const rect = target.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return false;
            return !(
              rect.right < actionRect.left - 10 ||
              rect.left > actionRect.right + 10 ||
              rect.bottom < actionRect.top - 10 ||
              rect.top > actionRect.bottom + 10
            );
          })
        : true;
      const visible =
        mobile.matches &&
        window.scrollY > 240 &&
        !nearGuard &&
        !editing &&
        !collides;
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
    const observer = new IntersectionObserver(schedule, { rootMargin: "72px" });
    const resizeObserver = new ResizeObserver(schedule);
    guards.forEach((guard) => observer.observe(guard));
    const main = document.querySelector("main");
    if (main) resizeObserver.observe(main);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("focusin", schedule);
    document.addEventListener("focusout", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("focusin", schedule);
      document.removeEventListener("focusout", schedule);
    };
  }, [pathname]);

  if (pathname === "/contact") return null;

  const visible = visibility.pathname === pathname && visibility.visible;

  return (
    <div
      aria-label="Quick contact"
      role="region"
      data-visible={visible}
      aria-hidden={!visible}
      className="mobile-action-bar pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 min-[769px]:hidden"
    >
      <div className="mx-auto flex max-w-md justify-end">
        <Link
          ref={action}
          href="/contact"
          tabIndex={visible ? 0 : -1}
          className="focus-ring mobile-action-cta inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-primary/35 bg-primary px-4 text-[0.8125rem] font-semibold text-primary-foreground shadow-[0_12px_32px_-18px_hsl(var(--primary))] backdrop-blur-xl"
        >
          Start a Project
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
