import type { Insight, Service, WorkItem } from "../types/content";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Design & Development",
    shortDescription:
      "Fast, credible and conversion-focused websites that communicate your value clearly and give your marketing a stronger foundation.",
    heroCopy:
      "Launch a polished marketing website that feels premium on mobile, loads quickly and turns visitor intent into qualified conversations.",
    outcomes: [
      "Clearer positioning",
      "Higher enquiry quality",
      "SEO-ready foundations",
    ],
    includes: [
      "Information architecture",
      "Responsive UI build",
      "CMS/content adapter",
      "Analytics-ready CTA paths",
    ],
    process: ["Discover", "Design", "Build", "Launch", "Grow"],
    relatedServices: ["seo", "performance-marketing"],
    faq: [
      {
        question: "Can the website launch before all brand assets are final?",
        answer:
          "Yes. We can establish a flexible visual foundation first, then refine approved brand assets without rebuilding the entire experience.",
      },
      {
        question: "Will the site be editable later?",
        answer:
          "The content repository is isolated so Supabase or another CMS can power service, work and insight content later.",
      },
    ],
    seo: {
      title: "Web Development Services",
      description:
        "Premium web development for fast, conversion-focused business websites.",
    },
  },
  {
    slug: "app-development",
    title: "Apps & Digital Products",
    shortDescription:
      "Thoughtful web applications, PWAs, portals and MVPs shaped around real user needs and clear business goals.",
    heroCopy:
      "Design and build app experiences that validate the workflow first, then scale into a stronger product platform.",
    outcomes: [
      "Sharper MVP scope",
      "Reusable product UI",
      "Lower launch friction",
    ],
    includes: [
      "Product flow mapping",
      "PWA-ready frontend",
      "API integration planning",
      "Launch analytics",
    ],
    process: ["Scope", "Prototype", "Build", "Test", "Release"],
    relatedServices: ["web-development", "performance-marketing"],
    faq: [
      {
        question: "Is a native mobile app included in V1?",
        answer:
          "No. Native Android/iOS is outside V1; PWA and responsive product experiences are supported.",
      },
    ],
    seo: {
      title: "App and PWA Development",
      description:
        "App and PWA development services for launch-ready digital products.",
    },
  },
  {
    slug: "seo",
    title: "Search Engine Optimisation",
    shortDescription:
      "Technical and content foundations that help search engines understand your business and the right customers discover it.",
    heroCopy:
      "Create a search-ready foundation across structure, metadata, performance, internal links and content planning.",
    outcomes: [
      "Better indexability",
      "Stronger search intent mapping",
      "Cleaner content architecture",
    ],
    includes: [
      "Technical SEO audit",
      "Metadata framework",
      "Schema planning",
      "Content opportunity map",
    ],
    process: ["Audit", "Map", "Fix", "Publish", "Measure"],
    relatedServices: ["web-development", "performance-marketing"],
    faq: [
      {
        question: "Are rankings guaranteed?",
        answer:
          "No. The work creates a stronger foundation and measurement loop, but results depend on competition and content investment.",
      },
    ],
    seo: {
      title: "SEO Services",
      description:
        "SEO foundations for technical performance, content structure and organic lead generation.",
    },
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortDescription:
      "Focused campaigns, landing pages and measurement systems built to attract relevant audiences and improve acquisition decisions.",
    heroCopy:
      "Build the conversion paths and campaign measurement needed for Google Ads, Meta Ads and future paid channels.",
    outcomes: [
      "Campaign-ready landing pages",
      "Cleaner attribution",
      "Faster optimisation cycles",
    ],
    includes: [
      "Offer framing",
      "Landing page build",
      "Conversion tracking",
      "Testing backlog",
    ],
    process: ["Offer", "Launch", "Track", "Optimise", "Scale"],
    relatedServices: ["web-development", "seo"],
    faq: [
      {
        question: "Can campaign pages hide the main navigation?",
        answer:
          "Yes. Campaign route configuration can use a reduced navigation mode for focused paid traffic journeys.",
      },
    ],
    seo: {
      title: "Performance Marketing Services",
      description:
        "Performance marketing systems for paid campaigns, landing pages and lead attribution.",
    },
  },
];

export const workItems: WorkItem[] = [
  {
    slug: "local-services-growth-system",
    title: "Local Services Growth System",
    projectType: "Concept Build",
    category: "Web + SEO + Paid",
    summary:
      "An internal concept exploring a clearer website, search foundation and campaign funnel for a local service business.",
    outcome: "Target outcome: clearer enquiry flow and campaign attribution.",
    metrics: ["Customer journey mapped", "Measurement framework defined"],
    seo: {
      title: "Local Services Growth System",
      description:
        "A transparent studio concept for connecting a local-services website, SEO foundation and campaign funnel.",
    },
  },
  {
    slug: "founder-launch-platform",
    title: "Founder Launch Platform",
    projectType: "Concept Build",
    category: "Website + PWA",
    summary:
      "An internal concept exploring a focused launch website and lightweight product experience for an early-stage founder.",
    outcome:
      "Target outcome: faster launch readiness and clearer product narrative.",
    metrics: ["MVP scope structured", "Launch journey prototyped"],
    seo: {
      title: "Founder Launch Platform",
      description:
        "A transparent studio concept for a focused founder website and lightweight digital product experience.",
    },
  },
];

export const insights: Insight[] = [
  {
    slug: "website-before-ads",
    title: "Why the website should be fixed before scaling ads",
    excerpt:
      "Paid traffic performs better when the website already explains the offer clearly, earns trust and measures meaningful actions.",
    category: "Growth",
    readTime: "4 min read",
    sections: [
      {
        title: "Advertising amplifies the experience you already have",
        paragraphs: [
          "Ads can bring more people to a website, but they cannot repair an unclear offer, weak proof or a confusing next step. Increasing traffic before fixing those fundamentals often increases spend faster than it increases qualified enquiries.",
          "Before scaling a campaign, a visitor should be able to understand who the service is for, what problem it solves and what to do next within a few moments.",
        ],
      },
      {
        title: "Build a measurable conversion path first",
        paragraphs: [
          "A useful landing journey connects the promise in the advertisement with the message on the page. It removes unnecessary choices, answers the most likely objections and makes the primary action easy on mobile as well as desktop.",
          "Measurement should also be ready before budget increases. At minimum, track meaningful actions such as qualified form submissions, calls and WhatsApp conversations—not only page views or button clicks.",
        ],
      },
      {
        title: "A practical order of work",
        paragraphs: [
          "Start by clarifying the offer and audience. Improve the core page, test the enquiry journey, confirm that analytics records the right events, and only then send paid traffic. Early campaign data can then guide deliberate improvements instead of exposing avoidable website problems.",
          "The goal is not to make a website perfect before advertising. It is to make the value proposition credible, the next step obvious and the results measurable enough to learn from every campaign.",
        ],
      },
    ],
    seo: {
      title: "Why Fix the Website Before Scaling Ads",
      description:
        "Learn why conversion clarity, trust and measurement should be strengthened before increasing paid advertising spend.",
    },
  },
];

export const siteConfig = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  brand: {
    name: "aashishlabs",
    logoLabel: "aashishlabs logo",
    tagline: "Strategy · Design · Technology · Growth",
  },
  contact: {
    email: "aashishlabs@gmail.com",
    phone: "+91 84462 38633",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918446238633",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent("I want to discuss a project.")}`;
    },
  },
  seo: {
    defaultTitle:
      "aashishlabs — Digital Agency for Startups, SMEs and MSMEs in India",
    defaultDescription:
      "A full-service digital agency helping startups, SMEs and MSMEs across India build websites, digital products, search visibility and measurable growth systems.",
  },
  navigation: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  home: {
    hero: {
      title:
        "Start focused. Build what matters. Grow with evidence.",
      description:
        "AashishLabs helps startups, SMEs and MSMEs across India turn business ideas and digital challenges into clear, credible and launch-ready experiences.",
      primaryCta: "Discuss Your Project",
      secondaryCta: "Explore Our Services",
      preview: [
        {
          title: "Strategy",
          description: "Business goals and customer priorities aligned.",
        },
        {
          title: "Experience",
          description: "Clear journeys and thoughtful interfaces.",
        },
        {
          title: "Technology",
          description: "Fast, reliable and adaptable foundations.",
        },
        {
          title: "Growth",
          description: "Search, conversion and measurement built in.",
        },
      ],
    },
    trust: [
      "Strategy before screens",
      "Direct, accountable execution",
      "Search-ready by design",
      "Measured after launch",
    ],
    difference: {
      title: "Practical digital solutions, shaped around your business.",
      description:
        "Growing businesses rarely need more complexity. They need the right priorities, dependable execution and a digital foundation that can improve over time. AashishLabs brings strategy, design, development and growth thinking into one connected process.",
      items: [
        {
          title: "Business before buzzwords",
          description:
            "We begin with your customers, goals and constraints. Technology and design choices follow what the business needs to achieve.",
        },
        {
          title: "Start with what matters",
          description:
            "We identify the smallest meaningful solution that can be launched, tested and expanded with greater confidence.",
        },
        {
          title: "One connected approach",
          description:
            "Messaging, experience, development, search and measurement are planned together to create a consistent customer journey.",
        },
        {
          title: "Clear and collaborative",
          description:
            "You remain involved at important stages, with clear priorities, visible progress and practical explanations throughout the project.",
        },
      ],
    },
    studio: {
      title: "A digital studio for ambitious, growing businesses.",
      description: [
        "AashishLabs was created to make thoughtful digital execution more accessible to startups, SMEs and MSMEs in India.",
        "Our initial focus is websites and digital products—the places where customers understand your business, evaluate your credibility and decide whether to take the next step. From there, we can support search visibility, performance marketing and continuous improvement when the business is ready.",
        "We combine focused thinking with hands-on execution, keeping the process straightforward and every outcome connected to a real business objective.",
      ],
      principle: "Built for today. Ready for what comes next.",
      cta: "Discuss Your Project",
    },
    outcomes: [
      {
        title: "Earn trust faster",
        description:
          "Present your business with the clarity, consistency and quality customers expect before starting a conversation.",
      },
      {
        title: "Turn attention into action",
        description:
          "Give visitors focused journeys, relevant proof and clear next steps instead of making them search for answers.",
      },
      {
        title: "Grow with better signals",
        description:
          "Use search, campaign and conversion data to understand what is working and make better decisions over time.",
      },
    ],
    process: [
      {
        title: "Discover",
        description:
          "We understand your business, audience, offer, competitors, current challenges and desired outcomes.",
        outcome:
          "A clearer problem statement, priorities and project direction.",
      },
      {
        title: "Define",
        description:
          "We determine what should be built now, what can wait and how success should be measured.",
        outcome:
          "An agreed scope, customer journey, content direction and delivery plan.",
      },
      {
        title: "Design",
        description:
          "We structure the experience, create key screens and review important interactions before full development begins.",
        outcome:
          "Wireframes or visual concepts that make the solution tangible and easier to validate.",
      },
      {
        title: "Build & validate",
        description:
          "We develop the approved experience, connect essential services and test it across devices and user journeys.",
        outcome:
          "A responsive, accessible and search-ready solution prepared for real-world use.",
      },
      {
        title: "Launch & improve",
        description:
          "We complete final checks, configure measurement and release. After launch, real behaviour guides the next improvements.",
        outcome:
          "A reliable launch and a practical roadmap for what comes next.",
      },
    ],
    faq: [
      {
        question: "Who does AashishLabs work with?",
        answer:
          "We primarily work with startups, SMEs and MSMEs in India that are launching something new, improving an existing digital presence or building a stronger path to growth.",
      },
      {
        question: "What can you help us build?",
        answer:
          "Our primary focus is business websites, landing pages, web applications and early-stage digital products. We can also support SEO foundations, analytics, conversion improvement and focused performance campaigns.",
      },
      {
        question: "Do we need a complete project brief?",
        answer:
          "No. You can approach us with an idea, a business problem or an existing website that is not delivering results. The discovery stage helps turn that starting point into a clearer scope.",
      },
      {
        question: "Can we begin with a smaller project?",
        answer:
          "Yes. For growing businesses, a focused first phase is often more practical than a large transformation. We can identify the most valuable starting point and create a foundation that can expand later.",
      },
      {
        question: "How long does a project take?",
        answer:
          "The timeline depends on scope, complexity, content readiness and feedback cycles. After the initial discussion, we will provide a realistic delivery plan with clear milestones.",
      },
      {
        question: "How much will the project cost?",
        answer:
          "Pricing is based on the work required rather than a generic package. Once the priorities and scope are understood, you will receive a transparent proposal outlining deliverables, timelines and costs.",
      },
      {
        question: "Will we be involved during the project?",
        answer:
          "Yes. Important decisions are reviewed together at defined stages. This keeps the work aligned while avoiding unnecessary meetings and prolonged feedback cycles.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We can continue with maintenance, SEO, analytics reviews, conversion improvements, content or growth campaigns. You can also take over the project with a clear handover.",
      },
      {
        question: "Will we own the final website or product?",
        answer:
          "Project ownership and handover terms will be clearly stated in the proposal. Unless a specific third-party licence has its own conditions, approved and paid-for deliverables will be handed over to the client.",
      },
    ],
    finalCta: {
      title: "You do not need every answer before you begin.",
      description:
        "Tell us what you want to launch, improve or understand. We will help identify the clearest next step—without pushing unnecessary features or services.",
      primaryCta: "Start a Conversation",
      secondaryCta: "Connect on WhatsApp",
    },
  },
  footer: {
    description:
      "A full-service digital agency helping startups, SMEs and MSMEs across India build credible experiences, useful technology and stronger paths to growth.",
  },
} as const;
