import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AashishLabs collects, uses and protects information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <main className="container max-w-3xl py-20">
        <h1 className="font-display text-5xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Effective date: 1 September 2026
        </p>
        <div className="mt-10 grid gap-8 leading-8 text-muted-foreground">
          <PolicySection title="Overview">
            {siteConfig.brand.name} respects your privacy. This policy explains
            what information we collect through this website, why we use it and
            the choices available to you.
          </PolicySection>
          <PolicySection title="Information we collect">
            When you submit an enquiry, we may collect your name, business name,
            email address, phone number, service interests, budget range,
            timeline and project message. We may also record the page and
            campaign that led to the enquiry, along with privacy-preserving
            hashes of technical information used for security and abuse
            prevention.
          </PolicySection>
          <PolicySection title="How we use information">
            We use this information to respond to enquiries, understand project
            requirements, provide requested services, improve the website,
            measure marketing performance and protect our systems from spam or
            misuse. We do not sell personal information.
          </PolicySection>
          <PolicySection title="Service providers and data location">
            We use trusted service providers including Vercel for website
            hosting, Supabase for enquiry storage and Resend for email
            notifications. If you allow analytics, Google Analytics helps us
            understand aggregate website usage, traffic sources and successful
            enquiry journeys. Advertising storage and personalisation remain
            disabled. These providers may process information in countries
            outside India under their own security and privacy commitments.
          </PolicySection>
          <PolicySection title="Analytics choices">
            Google Analytics remains disabled unless you select “Allow
            analytics” in the website preference notice. Your choice is stored
            in your browser. You can clear this site’s browser storage to reset
            the choice and see the notice again.
          </PolicySection>
          <PolicySection title="Retention and security">
            Enquiry information is kept only as long as reasonably necessary to
            respond, manage a potential client relationship, maintain business
            records and meet legal obligations. We use access controls,
            encrypted connections and restricted server credentials, but no
            internet service can guarantee absolute security.
          </PolicySection>
          <PolicySection title="Your choices">
            You may ask to access, correct or delete information associated with
            your enquiry, subject to applicable legal and record-keeping
            requirements. You may also ask us to stop contacting you.
          </PolicySection>
          <PolicySection title="Contact and updates">
            For privacy questions or requests, email{" "}
            <a
              className="text-primary hover:underline"
              href={`mailto:${siteConfig.contact.email}`}
            >
              {siteConfig.contact.email}
            </a>
            . We may update this policy when our services or legal obligations
            change; the effective date above will show the latest revision.
          </PolicySection>
        </div>
      </main>
    </MainLayout>
  );
}

function PolicySection({
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
