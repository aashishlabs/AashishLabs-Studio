type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}
