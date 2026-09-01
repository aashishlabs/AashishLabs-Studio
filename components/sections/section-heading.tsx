type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary md:mb-3 md:text-sm md:tracking-[0.2em]">{eyebrow}</p> : null}
      <h2 className="font-display text-[1.75rem] font-semibold leading-tight md:text-5xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-muted-foreground md:mt-4 md:text-lg md:leading-7">{description}</p> : null}
    </div>
  );
}
