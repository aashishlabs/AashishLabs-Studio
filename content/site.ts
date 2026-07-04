import type { Insight, Service, WorkItem } from "../types/content";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Fast, high-conversion websites built for credibility, SEO and lead generation.",
    heroCopy:
      "Launch a polished marketing website that feels premium on mobile, loads quickly and turns visitor intent into qualified conversations.",
    outcomes: ["Clearer positioning", "Higher enquiry quality", "SEO-ready foundations"],
    includes: ["Information architecture", "Responsive UI build", "CMS/content adapter", "Analytics-ready CTA paths"],
    process: ["Discover", "Design", "Build", "Launch", "Grow"],
    relatedServices: ["seo", "performance-marketing"],
    faq: [
      {
        question: "Can the website launch before all brand assets are final?",
        answer: "Yes. Phase 1 uses configurable placeholders so final brand assets can be swapped without rebuilding templates."
      },
      {
        question: "Will the site be editable later?",
        answer: "The content repository is isolated so Supabase or another CMS can power service, work and insight content later."
      }
    ],
    seo: {
      title: "Web Development Services",
      description: "Premium web development for fast, conversion-focused business websites."
    }
  },
  {
    slug: "app-development",
    title: "App/PWA Development",
    shortDescription: "Lean product interfaces, portals and installable web apps for launch-stage teams.",
    heroCopy:
      "Design and build app experiences that validate the workflow first, then scale into a stronger product platform.",
    outcomes: ["Sharper MVP scope", "Reusable product UI", "Lower launch friction"],
    includes: ["Product flow mapping", "PWA-ready frontend", "API integration planning", "Launch analytics"],
    process: ["Scope", "Prototype", "Build", "Test", "Release"],
    relatedServices: ["web-development", "performance-marketing"],
    faq: [
      {
        question: "Is a native mobile app included in V1?",
        answer: "No. Native Android/iOS is outside V1; PWA and responsive product experiences are supported."
      }
    ],
    seo: {
      title: "App and PWA Development",
      description: "App and PWA development services for launch-ready digital products."
    }
  },
  {
    slug: "seo",
    title: "SEO",
    shortDescription: "Technical and content SEO foundations for search visibility and compounding demand.",
    heroCopy:
      "Create a search-ready foundation across structure, metadata, performance, internal links and content planning.",
    outcomes: ["Better indexability", "Stronger search intent mapping", "Cleaner content architecture"],
    includes: ["Technical SEO audit", "Metadata framework", "Schema planning", "Content opportunity map"],
    process: ["Audit", "Map", "Fix", "Publish", "Measure"],
    relatedServices: ["web-development", "performance-marketing"],
    faq: [
      {
        question: "Are rankings guaranteed?",
        answer: "No. The work creates a stronger foundation and measurement loop, but results depend on competition and content investment."
      }
    ],
    seo: {
      title: "SEO Services",
      description: "SEO foundations for technical performance, content structure and organic lead generation."
    }
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortDescription: "Campaign landing pages, tracking and paid acquisition systems for qualified leads.",
    heroCopy:
      "Build the conversion paths and campaign measurement needed for Google Ads, Meta Ads and future paid channels.",
    outcomes: ["Campaign-ready landing pages", "Cleaner attribution", "Faster optimisation cycles"],
    includes: ["Offer framing", "Landing page build", "Conversion tracking", "Testing backlog"],
    process: ["Offer", "Launch", "Track", "Optimise", "Scale"],
    relatedServices: ["web-development", "seo"],
    faq: [
      {
        question: "Can campaign pages hide the main navigation?",
        answer: "Yes. Campaign route configuration can use a reduced navigation mode for focused paid traffic journeys."
      }
    ],
    seo: {
      title: "Performance Marketing Services",
      description: "Performance marketing systems for paid campaigns, landing pages and lead attribution."
    }
  }
];

export const workItems: WorkItem[] = [
  {
    slug: "local-services-growth-system",
    title: "Local Services Growth System",
    projectType: "Concept Build",
    category: "Web + SEO + Paid",
    summary: "A placeholder concept for a local business lead-generation website and campaign funnel.",
    outcome: "Target outcome: clearer enquiry flow and campaign attribution.",
    metrics: ["Concept metric placeholder", "No fictional client result claimed"],
    seo: {
      title: "Local Services Growth System",
      description: "Concept case study placeholder for a local services growth system."
    }
  },
  {
    slug: "founder-launch-platform",
    title: "Founder Launch Platform",
    projectType: "Concept Build",
    category: "Website + PWA",
    summary: "A placeholder concept for a startup launch site and lightweight product surface.",
    outcome: "Target outcome: faster launch readiness and clearer product narrative.",
    metrics: ["Concept metric placeholder", "Replace with verified client evidence"],
    seo: {
      title: "Founder Launch Platform",
      description: "Concept case study placeholder for a founder launch platform."
    }
  }
];

export const insights: Insight[] = [
  {
    slug: "website-before-ads",
    title: "Why the website should be fixed before scaling ads",
    excerpt: "Placeholder insight about conversion readiness, tracking and landing-page quality.",
    category: "Growth",
    readTime: "4 min read",
    seo: {
      title: "Why Fix the Website Before Scaling Ads",
      description: "A placeholder insight on website conversion readiness before paid acquisition."
    }
  }
];

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  brand: {
    name: "Brand Name",
    logoLabel: "Placeholder logo",
    tagline: "Premium digital growth studio"
  },
  contact: {
    email: "hello@example.com",
    phone: "+91 00000 00000",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent("I want to discuss a project.")}`;
    }
  },
  seo: {
    defaultTitle: "Brand Name - Digital Agency for Web, Apps, SEO and Performance Marketing",
    defaultDescription:
      "A premium, mobile-first digital agency website for web development, app/PWA development, SEO and performance marketing."
  },
  navigation: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" }
    ]
  },
  home: {
    hero: {
      title: "Build a sharper digital presence, then turn it into measurable growth.",
      description:
        "Placeholder copy for a premium digital agency offering high-conversion websites, apps, SEO and performance marketing.",
      primaryCta: "Start a Project",
      secondaryCta: "Explore Services"
    },
    trust: ["Launch-ready systems", "SEO foundations", "Paid campaign paths", "Mobile-first UX"],
    outcomes: [
      {
        title: "Credibility in seconds",
        description: "A polished first impression that helps serious prospects trust the business quickly."
      },
      {
        title: "Qualified enquiry flow",
        description: "Clear CTAs, contextual forms and direct contact routes on every primary journey."
      },
      {
        title: "Built to expand",
        description: "Services, campaigns, work and insights are modeled for future content growth."
      }
    ],
    process: ["Discover", "Design", "Build", "Launch", "Grow"]
  },
  footer: {
    description:
      "Placeholder agency description. Replace brand, proof, services, legal and contact details from the central content configuration."
  }
} as const;
