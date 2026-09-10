"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="mobile-navigation-sheet">
        <SheetTitle className="pr-12">{siteConfig.brand.name}</SheetTitle>
        <SheetDescription className="mt-2 text-sm text-muted-foreground">
          {siteConfig.brand.tagline}
        </SheetDescription>
        <div className="mobile-menu-theme">
          <ThemeToggle />
        </div>
        <nav aria-label="Mobile navigation" className="mt-8 grid gap-2">
          {siteConfig.navigation.primary.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="focus-ring rounded-lg border-b border-border/60 px-4 py-4 text-lg font-medium transition-colors hover:bg-secondary/70"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-8 grid gap-2">
          <SheetClose asChild>
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild size="lg" variant="secondary">
              <a href={siteConfig.contact.whatsappUrl}>Open WhatsApp</a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
