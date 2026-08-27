import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-24 pt-12 sm:pb-12">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <BrandLogo markClassName="h-12 w-[2.1rem]" wordmarkClassName="text-2xl" />
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{siteConfig.footer.description}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            {siteConfig.navigation.primary.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Legal</p>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-foreground">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
