import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of the AashishLabs website and its published information.",
};

export default function TermsPage() {
  return (
    <MainLayout>
      <main className="container max-w-3xl py-20">
        <h1 className="font-display text-5xl font-semibold">Terms of Use</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Effective date: 1 September 2026
        </p>
        <div className="mt-10 grid gap-8 leading-8 text-muted-foreground">
          <TermsSection title="Using this website">
            By using this website, you agree to use it lawfully and not attempt
            to disrupt, damage, probe or gain unauthorised access to the
            website, its forms or connected systems.
          </TermsSection>
          <TermsSection title="Information and enquiries">
            Website content is provided for general information and may change
            without notice. Submitting an enquiry does not create a client
            relationship, guarantee availability or form a contract. Any project
            will be governed by a separate written proposal or agreement
            covering scope, fees, timelines and responsibilities.
          </TermsSection>
          <TermsSection title="Intellectual property">
            Unless stated otherwise, the website design, copy, brand assets and
            original materials belong to {siteConfig.brand.name} or are used
            under licence. You may view and share links to the website, but may
            not reproduce or commercially exploit its content without written
            permission.
          </TermsSection>
          <TermsSection title="Concept work and results">
            Items labelled as concept builds demonstrate an approach and are not
            represented as completed client engagements. Business, search and
            advertising outcomes depend on many factors; no specific result is
            guaranteed.
          </TermsSection>
          <TermsSection title="Third-party services">
            The website may link to services such as WhatsApp or other
            third-party websites. We are not responsible for their availability,
            content or privacy practices, and your use of them is governed by
            their own terms.
          </TermsSection>
          <TermsSection title="Liability">
            To the extent permitted by applicable law, {siteConfig.brand.name}{" "}
            is not liable for indirect or consequential loss arising from
            reliance on website information, temporary unavailability or
            third-party services. Nothing in these terms limits rights or
            liabilities that cannot legally be excluded.
          </TermsSection>
          <TermsSection title="Governing law and contact">
            These terms are governed by the laws of India. Questions may be sent
            to{" "}
            <a
              className="text-primary hover:underline"
              href={`mailto:${siteConfig.contact.email}`}
            >
              {siteConfig.contact.email}
            </a>
            .
          </TermsSection>
        </div>
      </main>
    </MainLayout>
  );
}

function TermsSection({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
