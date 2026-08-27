import type { Insight, Service, WorkItem } from "../types/content";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Design & Development",
    shortDescription:
      "Fast, credible and conversion-focused websites that communicate your value clearly and give your marketing a stronger foundation.",
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
    title: "Apps & Digital Products",
    shortDescription:
      "Thoughtful web applications, PWAs, portals and MVPs shaped around real user needs and clear business goals.",
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
    title: "Search Engine Optimisation",
    shortDescription:
      "Technical and content foundations that help search engines understand your business and the right customers discover it.",
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
    shortDescription:
      "Focused campaigns, landing pages and measurement systems built to attract relevant audiences and improve acquisition decisions.",
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
    summary: "An internal concept exploring a clearer website, search foundation and campaign funnel for a local service business.",
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
    summary: "An internal concept exploring a focused launch website and lightweight product experience for an early-stage founder.",
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
    name: "aashishlabs",
    logoLabel: "aashishlabs logo",
    tagline: "Strategy · Design · Technology · Growth"
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
    defaultTitle: "aashishlabs — Digital Agency for Startups, SMEs and MSMEs in India",
    defaultDescription:
      "A full-service digital agency helping startups, SMEs and MSMEs across India build websites, digital products, search visibility and measurable growth systems."
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
      title: "Digital experiences built to earn trust, drive action and support growth.",
      description:
        "AashishLabs partners with startups, SMEs and MSMEs across India to design and build high-performing websites, web applications and digital growth systems—from the first idea to launch and continuous improvement.",
      primaryCta: "Discuss Your Project",
      secondaryCta: "Explore Our Services",
      preview: [
        { title: "Strategy", description: "Business goals and customer priorities aligned." },
        { title: "Experience", description: "Clear journeys and thoughtful interfaces." },
        { title: "Technology", description: "Fast, reliable and adaptable foundations." },
        { title: "Growth", description: "Search, conversion and measurement built in." }
      ]
    },
    trust: ["Strategy before screens", "Direct, accountable execution", "Search-ready by design", "Measured after launch"],
    difference: {
      title: "The build and the growth plan belong together.",
      description:
        "A polished website is not enough if nobody discovers it. More traffic is not enough if the experience fails to convert. AashishLabs brings product thinking and growth thinking into the same process, so every decision supports a clearer customer journey and a stronger business outcome.",
      items: [
        {
          title: "Clear before clever",
          description:
            "We begin with your audience, offer and business priorities—not visual trends or unnecessary technology."
        },
        {
          title: "Designed for action",
          description:
            "Every page, interaction and campaign path is shaped around what the customer should understand, trust or do next."
        },
        {
          title: "Built to improve",
          description:
            "Analytics, search foundations and flexible technology make the experience easier to measure and evolve after launch."
        }
      ]
    },
    outcomes: [
      {
        title: "Earn trust faster",
        description:
          "Present your business with the clarity, consistency and quality customers expect before starting a conversation."
      },
      {
        title: "Turn attention into action",
        description:
          "Give visitors focused journeys, relevant proof and clear next steps instead of making them search for answers."
      },
      {
        title: "Grow with better signals",
        description:
          "Use search, campaign and conversion data to understand what is working and make better decisions over time."
      }
    ],
    process: [
      {
        title: "Discover",
        description: "Understand your business, audience, offer, competitors and current digital friction."
      },
      {
        title: "Design",
        description: "Shape the message, customer journeys, interface direction and prototypes before the full build."
      },
      {
        title: "Build",
        description: "Develop a fast, accessible and adaptable experience with search and measurement foundations included."
      },
      {
        title: "Launch",
        description: "Test the complete journey, configure measurement and release with a clear quality checklist."
      },
      {
        title: "Grow",
        description: "Review real behaviour and improve through SEO, content, campaigns or product iterations."
      }
    ],
    finalCta: {
      title: "Have a digital challenge worth solving?",
      description:
        "Tell us what you are building, improving or trying to grow. We will help identify the clearest next step—whether that means a website, a digital product, stronger search foundations or a focused acquisition campaign.",
      primaryCta: "Start a Conversation",
      secondaryCta: "Connect on WhatsApp"
    }
  },
  footer: {
    description:
      "A full-service digital agency helping startups, SMEs and MSMEs across India build credible experiences, useful technology and stronger paths to growth."
  }
} as const;
