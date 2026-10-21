import { ArrowLeft, Clock, Calendar, User, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';
import { RecipeData } from '../types';
import { SeoHead } from './SeoHead';
import { Breadcrumbs } from './Breadcrumbs';
import { AeoBlock } from './AeoBlock';
import { RecipeCard } from './RecipeCard';
import { OptimizedImage } from './OptimizedImage';

interface ArticleViewProps {
  recipe: RecipeData;
  navigate: (path: string) => void;
}

export function ArticleView({ recipe, navigate }: ArticleViewProps) {
  // Related recipes recommendation
  const otherRecipes: { title: string; slug: string; desc: string }[] = [
    {
      title: 'Easy Paneer Recipes: Simple Ideas for Every Meal',
      slug: '/articles/easy-paneer-recipes/',
      desc: 'Learn how to make velvety Matar Paneer and keep your paneer cloud-soft.',
    },
    {
      title: 'Homemade Samosa Recipe: Crispy and Flavourful',
      slug: '/articles/homemade-samosa-recipe/',
      desc: 'Master the moyen fat-rubbing crust technique and low-heat frying for bakery crispness.',
    },
    {
      title: 'How to Make Masala Chai at Home: Spices & Ratios',
      slug: '/articles/how-to-make-masala-chai/',
      desc: 'The definitive stovetop decoction guide with fresh ginger and cardamom.',
    },
  ].filter((r) => r.slug !== `/articles/${recipe.slug}/`);

  // Schema.org Recipe & Article Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Recipe',
        'name': recipe.title,
        'headline': recipe.title,
        'description': recipe.summary,
        'image': [
          typeof window !== 'undefined'
            ? `${window.location.origin}${recipe.heroImage}`
            : `https://theeverydaykitchen.com${recipe.heroImage}`,
        ],
        'author': {
          '@type': 'Organization',
          'name': recipe.author,
          'url': 'https://theeverydaykitchen.com/',
        },
        'datePublished': recipe.publishDate,
        'prepTime': `PT${recipe.prepTimeMinutes}M`,
        'cookTime': `PT${recipe.cookTimeMinutes}M`,
        'totalTime': `PT${recipe.totalTimeMinutes}M`,
        'keywords': [recipe.primaryKeyword, ...recipe.secondaryKeywords].join(', '),
        'recipeYield': recipe.yieldUnit,
        'recipeCategory': recipe.category,
        'recipeCuisine': recipe.cuisine,
        'recipeIngredient': recipe.ingredients.map(
          (ing) => `${ing.quantity} ${ing.item}${ing.notes ? ` (${ing.notes})` : ''}`
        ),
        'recipeInstructions': recipe.instructions.map((step) => ({
          '@type': 'HowToStep',
          'position': step.stepNumber,
          'name': step.title,
          'text': step.instruction,
        })),
      },
      {
        '@type': 'Article',
        'headline': recipe.title,
        'description': recipe.metaDescription,
        'image': typeof window !== 'undefined'
          ? `${window.location.origin}${recipe.heroImage}`
          : `https://theeverydaykitchen.com${recipe.heroImage}`,
        'datePublished': recipe.publishDate,
        'author': {
          '@type': 'Organization',
          'name': recipe.author,
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'The Everyday Kitchen',
          'url': 'https://theeverydaykitchen.com/',
        },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://theeverydaykitchen.com/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Articles',
            'item': 'https://theeverydaykitchen.com/',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': recipe.title,
            'item': recipe.canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen pb-20">
      <SeoHead
        title={recipe.metaTitle}
        description={recipe.metaDescription}
        canonicalPath={`/articles/${recipe.slug}/`}
        ogImage={recipe.heroImage}
        ogType="article"
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          navigate={navigate}
          items={[
            { label: 'Articles', href: '/' },
            { label: recipe.title.split(':')[0] },
          ]}
        />

        {/* Back Link */}
        <div className="mt-2 mb-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#C0392B] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Easy Indian Recipes</span>
          </button>
        </div>

        {/* Article Header & Typography */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C0392B] uppercase">
            <span>Primary Focus: {recipe.primaryKeyword}</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.cuisine}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-stone-900 leading-[1.18] text-balance">
            {recipe.title}
          </h1>

          <p className="text-lg md:text-xl text-stone-600 font-serif italic leading-relaxed">
            {recipe.summary}
          </p>

          {/* Clean Unboxed Metadata Strip */}
          <div className="pt-4 pb-2 border-y border-stone-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {recipe.author}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Published {recipe.publishDate}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {recipe.readTimeMinutes} min read
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="font-mono tabular-nums text-stone-700">
              Prep: {recipe.prepTimeMinutes}m | Cook: {recipe.cookTimeMinutes}m
            </span>
          </div>
        </header>

        {/* Primary Hero Food Photography */}
        <figure className="my-8 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
          <OptimizedImage
            src={recipe.heroImage}
            alt={recipe.heroImageAlt}
            className="w-full"
            aspectRatio="16/9"
            priority={true}
            width={1280}
            height={720}
          />
          <figcaption className="p-3 bg-stone-50 border-t border-stone-100 text-xs text-stone-500 italic text-center">
            {recipe.heroImageCaption}
          </figcaption>
        </figure>

        {/* Quick Jump Anchor */}
        <div className="p-4 rounded-xl bg-[#F4EFE6] border border-stone-200/70 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs font-semibold text-stone-800">
            Looking for exact ingredients and measurements right away?
          </span>
          <a
            href="#recipe-card"
            className="px-4 py-1.5 text-xs font-bold text-white bg-[#C0392B] hover:bg-[#A93226] rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Jump to Recipe Card ↓
          </a>
        </div>

        {/* Direct Answer AEO Highlight Box 1 */}
        {recipe.aeoQuestions.length > 0 && (
          <AeoBlock item={recipe.aeoQuestions[0]} />
        )}

        {/* Long-Form Editorial Prose: Section 1 */}
        {recipe.articleSections[0] && (
          <section className="prose prose-stone max-w-none my-8">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight mb-4">
              {recipe.articleSections[0].heading}
            </h2>
            {recipe.articleSections[0].content.map((p, idx) => (
              <p
                key={idx}
                className={`text-stone-700 text-base md:text-lg leading-relaxed mb-4 ${
                  idx === 0 ? 'editorial-dropcap' : ''
                }`}
              >
                {p}
              </p>
            ))}
          </section>
        )}

        {/* In-Content Food Photography 1 */}
        {recipe.inlineImages[0] && (
          <figure className="my-10 rounded-xl overflow-hidden border border-stone-200">
            <OptimizedImage
              src={recipe.inlineImages[0].src}
              alt={recipe.inlineImages[0].alt}
              className="w-full"
              aspectRatio="4/3"
              width={800}
              height={600}
            />
            <figcaption className="p-3 bg-stone-50 border-t border-stone-100 text-xs text-stone-600 italic">
              {recipe.inlineImages[0].caption}
            </figcaption>
          </figure>
        )}

        {/* Long-Form Editorial Prose: Section 2 */}
        {recipe.articleSections[1] && (
          <section className="prose prose-stone max-w-none my-8">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight mb-4">
              {recipe.articleSections[1].heading}
            </h2>
            {recipe.articleSections[1].content.map((p, idx) => (
              <p key={idx} className="text-stone-700 text-base md:text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {/* Subsections if present */}
            {recipe.articleSections[1].subsections?.map((sub, sIdx) => (
              <div key={sIdx} className="my-6 pl-4 border-l-2 border-stone-200">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  {sub.subheading}
                </h3>
                {sub.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-stone-600 text-sm md:text-base leading-relaxed mb-2">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </section>
        )}

        {/* Direct Answer AEO Highlight Box 2 */}
        {recipe.aeoQuestions.length > 1 && (
          <AeoBlock item={recipe.aeoQuestions[1]} />
        )}

        {/* In-Content Food Photography 2 */}
        {recipe.inlineImages[1] && (
          <figure className="my-10 rounded-xl overflow-hidden border border-stone-200">
            <OptimizedImage
              src={recipe.inlineImages[1].src}
              alt={recipe.inlineImages[1].alt}
              className="w-full"
              aspectRatio="4/3"
              width={800}
              height={600}
            />
            <figcaption className="p-3 bg-stone-50 border-t border-stone-100 text-xs text-stone-600 italic">
              {recipe.inlineImages[1].caption}
            </figcaption>
          </figure>
        )}

        {/* Long-Form Editorial Prose: Section 3 */}
        {recipe.articleSections[2] && (
          <section className="prose prose-stone max-w-none my-8">
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight mb-4">
              {recipe.articleSections[2].heading}
            </h2>
            {recipe.articleSections[2].content.map((p, idx) => (
              <p key={idx} className="text-stone-700 text-base md:text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {recipe.articleSections[2].subsections?.map((sub, sIdx) => (
              <div key={sIdx} className="my-6 pl-4 border-l-2 border-stone-200">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  {sub.subheading}
                </h3>
                {sub.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-stone-600 text-sm md:text-base leading-relaxed mb-2">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </section>
        )}

        {/* Master Technique Tips Callout */}
        <section className="my-10 p-6 md:p-8 rounded-2xl bg-white border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C0392B] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Mastery Secrets</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Essential Technique Tips for Beginners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {recipe.keyTechniqueTips.map((tip, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-sm font-bold text-stone-900">
                  {tip.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* THE MAIN RECIPE CARD */}
        <RecipeCard recipe={recipe} />

        {/* Common Mistakes Table */}
        <section className="my-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C0392B] uppercase mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Troubleshooting Guide</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">
            Common Mistakes & How to Prevent Them
          </h2>

          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-xs font-semibold uppercase text-stone-600">
                  <th className="p-4">Common Mistake</th>
                  <th className="p-4">Underlying Cause</th>
                  <th className="p-4">Tested Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                {recipe.commonMistakes.map((m, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                    <td className="p-4 font-semibold text-stone-900 align-top">
                      {m.mistake}
                    </td>
                    <td className="p-4 text-xs md:text-sm text-stone-600 align-top">
                      {m.whyItHappens}
                    </td>
                    <td className="p-4 text-xs md:text-sm text-emerald-800 font-medium align-top">
                      {m.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Serving Ideas & Storage Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {/* Serving Ideas */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3">
            <h3 className="text-lg font-serif font-bold text-stone-900">
              Serving Suggestions
            </h3>
            <ul className="space-y-2 text-sm text-stone-600">
              {recipe.servingSuggestions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C0392B] font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage Guidance */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3">
            <h3 className="text-lg font-serif font-bold text-stone-900">
              Storage & Reheating Guidance
            </h3>
            <ul className="space-y-2 text-sm text-stone-600">
              {recipe.storageGuidance.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C0392B] font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Internal Linking & Next Recipes */}
        <section className="my-16 pt-10 border-t border-stone-200">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mb-6">
            Continue Your Indian Cooking Journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherRecipes.map((other) => (
              <div
                key={other.slug}
                onClick={() => navigate(other.slug)}
                className="group p-5 rounded-xl bg-white border border-stone-200 hover:border-[#C0392B] transition-colors cursor-pointer space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-[#C0392B]">
                  <span>Next Recipe Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#C0392B] transition-colors">
                  {other.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {other.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
