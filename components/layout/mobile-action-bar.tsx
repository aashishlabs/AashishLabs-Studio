import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function MobileActionBar() {
  return (
    <div
      aria-label="Quick contact"
      role="region"
      className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-3 backdrop-blur-xl sm:hidden"
    >
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-2">
        <Link
          href="/contact"
          className="focus-ring flex min-h-11 items-center justify-center rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground"
        >
          Start a Project
        </Link>
        <a
          href={siteConfig.contact.whatsappUrl}
          className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-md bg-secondary px-3 text-sm font-semibold text-secondary-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
