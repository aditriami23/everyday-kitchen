export interface FAQItem {
  question: string;
  directAnswer: string;
  detailedExplanation: string;
}

export interface RecipeStep {
  stepNumber: number;
  title: string;
  instruction: string;
  tip?: string;
}

export interface RecipeIngredient {
  item: string;
  quantity: string;
  notes?: string;
}

export interface RecipeData {
  title: string;
  slug: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroImage: string;
  heroImageAlt: string;
  heroImageCaption: string;
  inlineImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  yieldUnit: string;
  cuisine: string;
  category: string;
  readTimeMinutes: number;
  publishDate: string;
  author: string;
  summary: string;
  ingredients: RecipeIngredient[];
  instructions: RecipeStep[];
  cookingVarianceNote: string;
  keyTechniqueTips: {
    title: string;
    description: string;
  }[];
  commonMistakes: {
    mistake: string;
    whyItHappens: string;
    solution: string;
  }[];
  servingSuggestions: string[];
  storageGuidance: string[];
  aeoQuestions: FAQItem[];
  articleSections: {
    heading: string;
    content: string[];
    subsections?: {
      subheading: string;
      content: string[];
    }[];
  }[];
}

export interface KeywordResearchRow {
  pageUrl: string;
  pageName: string;
  primaryKeyword: string;
  secondaryKeyword1: string;
  secondaryKeyword2: string;
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Navigational';
  proposedTitle: string;
  proposedMetaDescription: string;
  strategicRationale: string;
  status: string;
}
