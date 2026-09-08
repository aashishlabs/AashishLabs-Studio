"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Main navigation"
      className="ml-auto hidden items-center gap-7 lg:flex xl:gap-10"
    >
      {siteConfig.navigation.primary.map((item) => {
        const active =
          !item.href.includes("#") &&
          (pathname === item.href || pathname.startsWith(item.href + "/"));
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "focus-ring group relative flex min-h-12 items-center whitespace-nowrap rounded-sm text-base font-medium tracking-[0.01em] text-foreground/80 transition-colors hover:text-foreground",
              active && "text-foreground",
            )}
          >
            {item.label}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none",
                active && "scale-x-100",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
