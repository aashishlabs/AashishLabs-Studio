import type { HTMLAttributes } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & { delay?: number };

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  void delay;
  return <div {...props}>{children}</div>;
}
