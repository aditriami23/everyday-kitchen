# The Everyday Kitchen – Deployment & Next.js Vercel Guide

Welcome to **The Everyday Kitchen**, a publication-grade Indian food and cooking website engineered for beginners. This document provides complete instructions for local testing, one-click Vercel deployment, and Next.js Static Site Generation (SSG) configuration.

---

## 1. Quick Local Testing

The project is currently configured with high-performance Vite, React 19, TypeScript, and Tailwind CSS.

```bash
# 1. Install dependencies
npm install

# 2. Run the development server locally
npm run dev

# 3. Test production build
npm run build
npm run preview
```

Open `http://localhost:3000` in your browser. All URLs use HTML5 pushState routing:
- `/` – Homepage & Hub
- `/articles/easy-paneer-recipes/` – Easy Paneer Recipes Guide
- `/articles/homemade-samosa-recipe/` – Homemade Samosa Recipe Masterclass
- `/articles/how-to-make-masala-chai/` – How to Make Masala Chai Guide
- `/keyword-research/` – Keyword Research & SEO Architecture Documentation
- `/sitemap.xml` – XML Sitemap
- `/robots.txt` – Robots Exclusion Standard

---

## 2. Deploying Directly to Vercel (Current Build)

The repository includes a production-ready `vercel.json` configured for zero-config Vercel deployment.

### Option A: Via Vercel CLI (Fastest)

```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Log in and deploy
vercel

# Deploy to production
vercel --prod
```

### Option B: Via Vercel Web Dashboard & GitHub

1. Push this repository to your GitHub/GitLab account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Everyday Kitchen"
   git remote add origin https://github.com/YOUR_USERNAME/the-everyday-kitchen.git
   git push -u origin main
   ```
2. Navigate to [https://vercel.com/new](https://vercel.com/new).
3. Import your `the-everyday-kitchen` repository.
4. Vercel will automatically detect `vite` as the framework preset and use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your site will be live on an official `*.vercel.app` domain with global edge caching and free SSL.

---

## 3. Next.js App Router Structure (Static Generation / SSG)

If you prefer to run this in Next.js 14/15 with Static Generation (`output: 'export'` or SSG via `generateStaticParams`), the application is structured with full modularity.

### Next.js App Router Architecture:

```
my-nextjs-app/
├── app/
│   ├── layout.tsx                      # Root layout with Playfair & Plus Jakarta Sans fonts
│   ├── page.tsx                        # Homepage (Static generated)
│   ├── articles/
│   │   └── [slug]/
│   │       └── page.tsx                # Dynamic route with generateStaticParams()
│   ├── keyword-research/
│   │   └── page.tsx                # Keyword table (Static generated)
│   ├── sitemap.ts                      # Next.js dynamic metadata sitemap
│   └── robots.ts                       # Next.js robots configuration
├── public/
│   └── images/                         # Food photography assets
├── src/
│   ├── data/
│   │   ├── recipes.ts                  # Recipe datasets & long-form articles
│   │   └── keywords.ts                 # Keyword research documentation
│   └── types/
│       └── index.ts                    # Shared TypeScript interfaces
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

### Next.js Static Generation Code: `app/articles/[slug]/page.tsx`

```tsx
import { recipesData } from '@/src/data/recipes';
import { notFound } from 'next/navigation';
import { ArticleView } from '@/src/components/ArticleView';
import type { Metadata } from 'next';

// 1. Static Generation for all recipe pages at build time
export async function generateStaticParams() {
  return [
    { slug: 'easy-paneer-recipes' },
    { slug: 'homemade-samosa-recipe' },
    { slug: 'how-to-make-masala-chai' },
  ];
}

// 2. Dynamic SEO metadata for each statically generated page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const recipe = recipesData[params.slug];
  if (!recipe) return {};

  return {
    title: recipe.metaTitle,
    description: recipe.metaDescription,
    alternates: {
      canonical: recipe.canonicalUrl,
    },
    openGraph: {
      title: recipe.metaTitle,
      description: recipe.metaDescription,
      url: recipe.canonicalUrl,
      images: [{ url: recipe.heroImage, alt: recipe.heroImageAlt }],
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const recipe = recipesData[params.slug];
  if (!recipe) notFound();

  return <ArticleView recipe={recipe} />;
}
```

---

## 4. SEO & Verification Checklist

Before publishing, verify the following:
- [x] **Page Titles:** ~50–60 characters, distinct per page.
- [x] **Meta Descriptions:** 140–160 characters, distinct per page.
- [x] **Canonical URLs:** Full absolute paths on all pages.
- [x] **AEO Question Headings:** Natural-language H2s paired with direct answers.
- [x] **Structured Data:** Schema.org `Recipe`, `Article`, `BreadcrumbList`, `FAQPage`, and `WebSite` JSON-LD valid scripts.
- [x] **Robots.txt:** Accessible at `/robots.txt` pointing to `/sitemap.xml`.
- [x] **Sitemap:** Accessible at `/sitemap.xml` with `<lastmod>`, `<changefreq>`, and `<priority>`.
- [x] **Zero Broken Images:** All 9 food photographs are generated and served with `alt` text and responsive dimensions.
- [x] **Accessibility:** WCAG AA contrast, semantic HTML headings (`h1` -> `h2` -> `h3`), keyboard focus states.
