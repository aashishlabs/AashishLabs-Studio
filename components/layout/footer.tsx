import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { HomeLink } from "@/components/layout/home-link";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer border-t border-[hsl(var(--subtle-border))] pb-10 pt-10 sm:pb-12 sm:pt-12">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-8">
        <div className="col-span-2 md:col-span-1">
          <HomeLink
            className="focus-ring inline-flex rounded-sm"
            aria-label={`${siteConfig.brand.name} home`}
          >
            <BrandLogo />
          </HomeLink>
          <p className="mt-3 max-w-md text-[0.9375rem] leading-6 text-muted-foreground">
            {siteConfig.footer.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <div className="mt-3 grid gap-2 text-[0.9375rem] text-muted-foreground">
            {siteConfig.navigation.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring inline-flex min-h-11 items-center rounded-sm hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Legal</p>
          <div className="mt-3 grid gap-2 text-[0.9375rem] text-muted-foreground">
            <Link
              href="/privacy-policy"
              className="focus-ring inline-flex min-h-11 items-center rounded-sm hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="focus-ring inline-flex min-h-11 items-center rounded-sm hover:text-foreground"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <p className="border-t border-[hsl(var(--subtle-border))] pt-6 text-center text-[0.9375rem] tracking-wide text-muted-foreground">
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          in India
        </p>
      </div>
    </footer>
  );
}
