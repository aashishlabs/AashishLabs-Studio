"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, PropsWithChildren } from "react";

type HomeLinkProps = PropsWithChildren<{
  className?: string;
  "aria-label"?: string;
}>;

export function HomeLink({ children, ...props }: HomeLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const isModifiedClick =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (pathname !== "/" || event.defaultPrevented || isModifiedClick) {
      return;
    }

    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <Link href="/" scroll onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
