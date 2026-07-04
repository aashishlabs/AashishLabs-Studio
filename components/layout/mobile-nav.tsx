"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/content/site";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>{siteConfig.brand.name}</SheetTitle>
        <SheetDescription className="mt-2 text-sm text-muted-foreground">{siteConfig.brand.tagline}</SheetDescription>
        <nav className="mt-8 grid gap-3">
          {siteConfig.navigation.primary.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="focus-ring rounded-md border border-white/10 bg-secondary/50 px-4 py-3 text-base font-medium"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-8 grid gap-3">
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
