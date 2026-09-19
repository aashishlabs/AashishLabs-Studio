import type { Insight, Service, WorkItem } from "../types/content";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "AI & Automation",
    homeBenefit:
      "Apply AI and automation to reduce manual work and improve decisions.",
    shortDescription:
      "Practical AI implementation and workflow automation designed around real business needs, existing systems and measurable outcomes.",
    heroCopy:
      "Identify where AI can create real value, automate repetitive work and connect people, data and systems without adding unnecessary complexity.",
    outcomes: [
      "Less manual work",
      "Faster, better-informed decisions",
      "Scalable automated workflows",
    ],
    includes: [
      "AI opportunity mapping",
      "Workflow automation",
      "System and data integrations",
      "Human-in-the-loop safeguards",
    ],
    process: ["Discover", "Prioritise", "Prototype", "Integrate", "Improve"],
    relatedServices: ["seo", "performance-marketing"],
    faq: [
      {
        question: "Where should we start with AI?",
        answer:
          "Start with a specific workflow, decision or customer journey where time, quality or visibility can improve. We assess feasibility and value before recommending a solution.",
      },
      {
        question: "Will automation replace our existing systems?",
        answer:
          "Not necessarily. We can often connect and improve the tools you already use, replacing systems only when the business case is clear.",
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
    title: "Software & Digital Products",
    homeBenefit:
      "Purpose-built software, portals and products shaped around real workflows.",
    shortDescription:
      "Useful web applications, portals, PWAs and MVPs built around clear business goals, user needs and operational realities.",
    heroCopy:
      "Turn a business need or product idea into reliable software that simplifies work, serves customers and creates a foundation for growth.",
    outcomes: [
      "Sharper MVP scope",
      "Simpler digital workflows",
      "Launch-ready foundations",
    ],
    includes: [
      "Product strategy and flow mapping",
      "Responsive web app or PWA",
      "API and system integrations",
      "Launch analytics",
    ],
    process: ["Scope", "Prototype", "Build", "Test", "Release"],
    relatedServices: ["web-development", "performance-marketing"],
    faq: [
      {
        question: "Can we begin with an MVP before a full platform?",
        answer:
          "Yes. We can define and build a focused first release that validates the core workflow before committing to a larger platform.",
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
    title: "Digital Transformation & Consulting",
    homeBenefit:
      "Product and technology consulting that turns priorities into a practical roadmap.",
    shortDescription:
      "Connected product and technology consulting for modernising processes, systems and customer experiences with clear priorities.",
    heroCopy:
      "Align people, processes, data and technology around a transformation plan your business can realistically execute and evolve.",
    outcomes: [
      "Clearer technology priorities",
      "Better-connected operations",
      "Lower transformation risk",
    ],
    includes: [
      "Digital maturity assessment",
      "Product and technology roadmap",
      "Process and system mapping",
      "Vendor and platform guidance",
    ],
    process: ["Assess", "Align", "Roadmap", "Enable", "Evolve"],
    relatedServices: ["web-development", "performance-marketing"],
    faq: [
      {
        question: "Does digital transformation require replacing everything?",
        answer:
          "No. The right plan often improves and connects existing systems first, then replaces only what limits the business or creates unnecessary risk.",
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
    title: "Growth & Technology Services",
    homeBenefit:
      "Connect customer journeys, growth systems and meaningful measurement.",
    shortDescription:
      "Integrated growth and technology support that connects digital journeys, platforms, data and experimentation around business outcomes.",
    heroCopy:
      "Strengthen how your business attracts, converts and learns from customers by connecting growth execution with the technology behind it.",
    outcomes: [
      "Connected growth systems",
      "Cleaner attribution",
      "Faster learning cycles",
    ],
    includes: [
      "Growth technology audit",
      "Landing journeys and CRM handoffs",
      "Conversion measurement",
      "Experimentation roadmap",
    ],
    process: ["Align", "Connect", "Launch", "Learn", "Scale"],
    relatedServices: ["web-development", "seo"],
    faq: [
      {
        question: "Can you support both growth strategy and implementation?",
        answer:
          "Yes. We can shape the priorities, implement the digital journeys and measurement, and support focused campaigns or continuous improvement where needed.",
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
    slug: "aashishlabs-studio",
    title: "AashishLabs",
    projectType: "Internal Project",
    preview: "studio",
    category: "AashishLabs website + enquiry journey",
    summary:
      "Our own digital home: a working example of connected strategy, design and development.",
    problem:
      "Make AashishLabs’ capabilities easy to understand, explore and enquire about.",
    solution:
      "A responsive website connecting service pages, project stories and a focused enquiry flow, with light and dark themes.",
    outcome:
      "Built: a functional website with dedicated service pages and an enquiry flow. No conversion results claimed.",
    metrics: [
      "Responsive layouts",
      "Light and dark themes",
      "Service and project routes",
      "Validated enquiry form",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    seo: {
      title: "AashishLabs — Internal Project",
      description:
        "Explore the thinking behind our own website, its service discovery and enquiry experience.",
    },
  },
  {
    slug: "local-services-growth-system",
    title: "Local Services Growth System",
    projectType: "Concept Build",
    preview: "local",
    problem:
      "Explore how a local service business could connect search discovery, its website and campaign enquiries.",
    solution:
      "A proposed journey from a clear service offer to a focused enquiry, with measurement planned across the funnel.",
    category: "Web + SEO + Paid",
    summary:
      "An internal concept exploring a clearer website, search foundation and campaign funnel for a local service business.",
    outcome: "Target outcome: clearer enquiry flow and campaign attribution.",
    metrics: ["Customer journey mapped", "Measurement framework defined"],
    seo: {
      title: "Local Services Growth System",
      description:
        "A transparent concept for connecting a local-services website, SEO foundation and campaign funnel.",
    },
  },
  {
    slug: "founder-launch-platform",
    title: "Founder Launch Platform",
    projectType: "Concept Build",
    preview: "founder",
    problem:
      "Explore how an early-stage founder could explain a product clearly without an oversized first release.",
    solution:
      "A focused launch narrative paired with a lightweight product workflow and a defined MVP scope.",
    category: "Website + PWA",
    summary:
      "An internal concept exploring a focused launch website and lightweight product experience for an early-stage founder.",
    outcome:
      "Target outcome: faster launch readiness and clearer product narrative.",
    metrics: ["MVP scope structured", "Launch journey prototyped"],
    seo: {
      title: "Founder Launch Platform",
      description:
        "A transparent concept for a focused founder website and lightweight digital product experience.",
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
    tagline: "AI · STRATEGY · SOFTWARE · AUTOMATION · PRODUCTS · GROWTH",
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
      "aashishlabs — Digital Product & Growth Partner for Startups, SMEs and MSMEs in India",
    defaultDescription:
      "A digital product & growth partner helping startups, SMEs and MSMEs across India build websites, digital products, search visibility and measurable growth systems.",
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
      title: "AI-powered Digital Transformation",
      supportingTitle: "Built to move your business forward.",
      description:
        "AI implementation, automation, software, digital products and technology consulting for startups, SMEs and MSMEs — connected from strategy to execution.",
      primaryCta: "Discuss Your Project",
      secondaryCta: "Explore the Work",
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
      "AI applied to real workflows",
      "Strategy before technology",
      "Software built around the business",
      "Growth connected to execution",
    ],
    difference: {
      title: "Practical digital solutions, shaped around your business.",
      description:
        "Growing businesses need practical transformation, not more complexity. AashishLabs connects AI, automation, software, product thinking and growth execution around clear business priorities.",
      items: [
        {
          title: "Business before buzzwords",
          description:
            "We begin with your operations, customers, goals and constraints. AI and technology choices follow what the business needs to achieve.",
        },
        {
          title: "Start with what matters",
          description:
            "We identify the most valuable place to begin, then shape a focused solution that can be implemented, tested and expanded with confidence.",
        },
        {
          title: "One connected approach",
          description:
            "AI, automation, software, product experience and growth systems are planned together so transformation works from strategy through execution.",
        },
        {
          title: "Clear and collaborative",
          description:
            "You remain involved at important stages, with clear priorities, visible progress and practical explanations throughout the project.",
        },
      ],
    },
    studio: {
      title:
        "An AI, digital transformation and software partner for growing businesses.",
      description: [
        "AashishLabs helps startups, SMEs and MSMEs use AI, software and technology to improve how the business works, serves customers and grows.",
        "Our work spans AI implementation, automation, software and digital products, digital transformation, product and technology consulting, and connected growth services.",
        "We also bring specialist experience in fintech and BFSI when the work benefits from deeper understanding of regulated products, financial journeys and operational complexity.",
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
          "Understand your business, customers and constraints. Agree what matters now, what can wait and how success will be measured.",
        outcome:
          "A clear problem statement, agreed scope, priorities and delivery plan.",
      },
      {
        title: "Design",
        description:
          "We structure the experience, create key screens and review important interactions before full development begins.",
        outcome:
          "Wireframes or visual concepts that make the solution tangible and easier to validate.",
      },
      {
        title: "Build",
        description:
          "We develop the approved experience, connect essential services and test it across devices and user journeys.",
        outcome:
          "A responsive, accessible and search-ready solution prepared for real-world use.",
      },
      {
        title: "Launch",
        description:
          "Complete final checks, configure measurement and release with a clear handover.",
        outcome:
          "A reliable release, ownership handover and the foundations to measure what happens next.",
      },
      {
        title: "Grow",
        description:
          "Use real behaviour to guide improvements to content, search, conversion and the product experience.",
        outcome:
          "A practical improvement roadmap, with ongoing support shaped around your needs.",
      },
    ],
    faq: [
      {
        question: "Who does AashishLabs work with?",
        answer:
          "We primarily work with startups, SMEs and MSMEs that want to apply AI, automate workflows, build software or modernise how the business operates and grows. Fintech and BFSI are areas of specialist expertise, not our only focus.",
      },
      {
        question: "What can you help us build?",
        answer:
          "We help implement AI, automate workflows, build software and digital products, plan digital transformation, advise on product and technology decisions, and connect growth execution with the systems behind it.",
      },
      {
        question: "Do we need a complete project brief?",
        answer:
          "No. You can approach us with an idea, a business problem, a manual workflow or an existing system that is not delivering results. The discovery stage helps turn that starting point into a clearer scope.",
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
          "We can continue with maintenance, automation improvements, analytics reviews, product iteration or growth support. You can also take over the solution with a clear handover.",
      },
      {
        question: "Will we own the final software or product?",
        answer:
          "Project ownership and handover terms will be clearly stated in the proposal. Unless a specific third-party licence has its own conditions, approved and paid-for deliverables will be handed over to the client.",
      },
    ],
    finalCta: {
      title: "Let’s build your next step.",
      description:
        "Tell us what you want to launch or improve. We’ll help you find a focused starting point.",
      primaryCta: "Start a Conversation",
      secondaryCta: "Connect on WhatsApp",
    },
  },
  footer: {
    description:
      "AI-enabled digital transformation for startups, SMEs and MSMEs — from strategy and automation to software, digital products and growth technology.",
  },
} as const;
