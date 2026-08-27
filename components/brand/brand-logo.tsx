import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  priority?: boolean;
};

export function BrandLogo({ className, markClassName, wordmarkClassName, priority = false }: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="aashishlabs">
      <Image
        src="/brand/aashishlabs-mark-dark.svg"
        alt=""
        width={32}
        height={42}
        priority={priority}
        className={cn("h-10 w-[1.9rem] shrink-0", markClassName)}
      />
      <span
        aria-hidden="true"
        className={cn("brand-wordmark text-[1.45rem] text-white", wordmarkClassName)}
      >
        <span>aas</span>
        <span className="brand-ascender">h</span>
        <span className="relative inline-block text-[#5B5FE8]">
          ı
          <span className="absolute left-1/2 top-[0.02em] h-[0.19em] w-[0.19em] -translate-x-1/2 -translate-y-full rounded-full bg-current" />
          <span className="absolute left-[calc(50%+0.14em)] top-[-0.2em] h-[0.24em] w-[0.24em] -translate-x-1/2 -translate-y-full rounded-full bg-current" />
        </span>
        <span>s</span>
        <span className="brand-ascender">h</span>
        <span className="brand-ascender">l</span>
        <span>a</span>
        <span className="brand-ascender">b</span>
        <span>s</span>
      </span>
    </span>
  );
}
