export type SeoContent = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroCopy: string;
  outcomes: string[];
  includes: string[];
  process: string[];
  faq: FaqItem[];
  relatedServices: string[];
  seo: SeoContent;
};

export type WorkItem = {
  slug: string;
  title: string;
  projectType: "Concept Build" | "Internal Project" | "Client Project";
  preview: "studio" | "local" | "founder";
  problem: string;
  solution: string;
  technologies?: string[];
  category: string;
  summary: string;
  outcome: string;
  metrics: string[];
  seo: SeoContent;
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  seo: SeoContent;
};

export type FaqItem = {
  question: string;
  answer: string;
};
