import Link from "next/link";
import { siteConfig } from "@/content/site";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#5B5FE8]/20 bg-[#0B1628]/90 shadow-[0_12px_40px_rgba(3,8,20,0.22)] backdrop-blur-xl">
      <div className="container flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-sm" aria-label={`${siteConfig.brand.name} home`}>
          <BrandLogo priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {siteConfig.navigation.primary.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-sm transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden sm:inline-flex">
          <Link href="/contact">Start a Project</Link>
        </Button>
        <MobileNav />
      </div>
    </header>
  );
}
