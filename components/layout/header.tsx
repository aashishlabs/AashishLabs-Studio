import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { HomeLink } from "@/components/layout/home-link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 shadow-[0_4px_24px_rgba(3,8,20,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center gap-4 px-4 sm:px-6 min-[769px]:h-20 lg:h-24 lg:gap-8 lg:px-8 xl:px-10">
        <HomeLink
          className="focus-ring shrink-0 rounded-sm"
          aria-label={`${siteConfig.brand.name} home`}
        >
          <BrandLogo priority />
        </HomeLink>
        <DesktopNav />
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0 lg:gap-4">
          <div className="lg:border-l lg:border-border/70 lg:pl-5">
            <ThemeToggle />
          </div>
          <Button
            asChild
            className="group hidden h-12 rounded-full px-6 text-[15px] shadow-none sm:inline-flex"
          >
            <Link href="/contact">
              Start a Project
              <ArrowUpRight
                className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
