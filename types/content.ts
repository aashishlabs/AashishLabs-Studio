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
  projectType: "Concept Build" | "Client Project";
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
  seo: SeoContent;
};

export type FaqItem = {
  question: string;
  answer: string;
};
