import { ArrowRight, Clock, ChefHat, Sparkles, BookOpen, Flame, CheckCircle2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { FAQItem } from '../types';

interface HomePageProps {
  navigate: (path: string) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  const homeAeoFaqs: FAQItem[] = [
    {
      question: 'What are some easy Indian recipes for beginners?',
      directAnswer: 'The easiest Indian recipes for beginners are Matar Paneer, Dal Tadka, Jeera Rice, and Homemade Masala Chai, all requiring fewer than 6 everyday spices and under 30 minutes of active cooking.',
      detailedExplanation: 'These recipes rely on fundamental techniques like blooming whole spices in hot fat (tadka) and building a simple aromatic base of sautéed onions, ginger, garlic, and tomatoes. Starting with these dishes teaches you temperature control and seasoning balance without requiring special equipment like tandoors or complex multi-phase marinades.',
    },
    {
      question: 'What essential spices are needed to start Indian cooking?',
      directAnswer: 'To start Indian cooking, you only need five core pantry spices: whole cumin seeds (jeera), ground turmeric (haldi), ground coriander (dhaniya), Kashmiri red chilli powder, and a good garam masala blend.',
      detailedExplanation: 'With these five pillars alongside fresh garlic, ginger, and yellow onions, you can prepare over 80% of classic homestyle curries, lentil stews, and vegetable dishes. Specialty whole spices like cardamom pods and cloves can be added gradually as you explore teas and festive snacks.',
    },
  ];

  const recipeCards = [
    {
      title: 'Easy Paneer Recipes: Simple Ideas for Every Meal',
      shortTitle: 'Everyday Matar Paneer',
      slug: '/articles/easy-paneer-recipes/',
      image: '/src/assets/images/paneer_curry_hero_1792556801237.jpg',
      alt: 'Fresh homemade Matar Paneer curry in a ceramic bowl with herbs',
      prepTime: '15 mins',
      cookTime: '25 mins',
      difficulty: 'Beginner',
      cuisine: 'North Indian',
      category: 'Vegetarian Dinner',
      description: 'Golden pan-seared paneer cubes and sweet green peas simmered in a gently spiced onion-tomato gravy. Includes the warm-water soak secret for permanently soft paneer.',
      primaryKwd: 'easy paneer recipes',
    },
    {
      title: 'Homemade Samosa Recipe: Crispy and Flavourful',
      shortTitle: 'Crispy Punjabi Samosas',
      slug: '/articles/homemade-samosa-recipe/',
      image: '/src/assets/images/samosa_crispy_hero_1792556803224.jpg',
      alt: 'Crispy golden fried Punjabi samosas with fresh green and red chutneys',
      prepTime: '40 mins',
      cookTime: '30 mins',
      difficulty: 'Intermediate',
      cuisine: 'North Indian',
      category: 'Appetiser & Snack',
      description: 'Shatteringly crisp, blister-free pastry cones packed with coarsely hand-crushed spiced potatoes and peas. Master the moyen fat-rubbing technique and low-heat frying.',
      primaryKwd: 'homemade samosa recipe',
    },
    {
      title: 'How to Make Masala Chai at Home: Spices & Ratios',
      shortTitle: 'Authentic Stovetop Masala Chai',
      slug: '/articles/how-to-make-masala-chai/',
      image: '/src/assets/images/masala_chai_hero_1792556804617.jpg',
      alt: 'Pouring hot spiced masala chai into clay cups with scattered whole spices',
      prepTime: '5 mins',
      cookTime: '10 mins',
      difficulty: 'Beginner',
      cuisine: 'All-India',
      category: 'Hot Beverage',
      description: 'The definitive stovetop decoction method. Learn the optimal 1.25:1 water-to-milk ratio, freshly cracked ginger-cardamom balance, and the aerating rolling boil.',
      primaryKwd: 'how to make masala chai',
    },
  ];

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://theeverydaykitchen.com/#website',
        'url': 'https://theeverydaykitchen.com/',
        'name': 'The Everyday Kitchen',
        'description': 'An educational Indian cooking blog for beginners featuring easy homestyle recipes, technique guides, and spice fundamentals.',
        'publisher': {
          '@type': 'Organization',
          'name': 'The Everyday Kitchen',
          'url': 'https://theeverydaykitchen.com/',
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': homeAeoFaqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${faq.directAnswer} ${faq.detailedExplanation}`,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Easy Indian Recipes for Beginners | The Everyday Kitchen"
        description="Master easy Indian recipes at home with step-by-step guides for soft paneer curries, flaky homemade samosas, and fragrant masala chai."
        canonicalPath="/"
        ogImage="/src/assets/images/home_hero_indian_feast_1792556801180.jpg"
        ogType="website"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Headline & Teaser */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold tracking-widest text-[#C0392B] uppercase">
                Educational Cooking Guide · Indian Cuisine for Beginners
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-stone-900 leading-[1.15] text-balance">
                Easy Indian Recipes for Beginners: Honest Food, Simple Steps.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                Demystifying traditional Indian home cooking without intimidating spice lists or confusing jargon. Learn the fundamental techniques behind velvety curries, crackling street snacks, and fragrant morning chai.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate('/articles/easy-paneer-recipes/')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#C0392B] hover:bg-[#A93226] active:scale-[0.98] rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Paneer Masterclass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/keyword-research/')}
                  className="px-5 py-3 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-all cursor-pointer"
                >
                  View Keyword Research
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-stone-200/60 flex flex-wrap items-center gap-6 text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C0392B]" />
                  Step-by-step photos
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C0392B]" />
                  Pantry-staple ingredients
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C0392B]" />
                  No specialty cookware needed
                </span>
              </div>
            </div>

            {/* Right Column: Hero Food Photography */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 aspect-16/10 group">
                <img
                  src="/src/assets/images/home_hero_indian_feast_1792556801180.jpg"
                  alt="A generous spread of homestyle Indian cooking including rich paneer curry, fluffy rotis, and aromatic whole spices"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  width="1280"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono uppercase tracking-wider text-amber-200">
                    The Homestyle Indian Table
                  </p>
                  <p className="text-sm font-serif font-medium text-stone-100">
                    Warm bread, gentle spices, and slow-simmered comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction to Easy Indian Cooking */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C0392B]">
              The Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              Introduction to Easy Indian Cooking for Beginners
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Contrary to common perception, authentic Indian cooking does not require grinding fifty ingredients or standing over a boiling cauldron for four hours. Homestyle Indian cuisine is grounded in three simple, repeatable cooking stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/70 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#C0392B]">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                1. The Tempering (Tadka)
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Whole spices—such as cumin seeds, mustard seeds, and dried chillies—are bloomed in hot ghee or oil for 20 to 30 seconds. Fat draws out essential fat-soluble flavour molecules, perfuming the entire dish from the very first minute.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/70 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#C0392B]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                2. The Onion-Tomato Masala
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Finely diced onions are gently caramelised until golden amber, followed by fresh ginger-garlic paste and tomatoes. This rich paste (bhuna masala) provides body, acidity, and natural umami to virtually every North Indian curry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/70 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#C0392B]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                3. The Gentle Simmer
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Vegetables, legumes, or tender paneer are introduced with warm water and simmered gently so the ingredients absorb the aromatics without disintegrating or toughening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Recipe Articles */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C0392B]">
                Core Culinary Guides
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-1">
                Featured Recipes & Step-by-Step Guides
              </h2>
            </div>
            <p className="text-sm text-stone-500 max-w-md">
              Each article contains exhaustive ingredient ratios, technique breakdowns, common pitfalls to avoid, and full printable recipe instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipeCards.map((card) => (
              <article
                key={card.slug}
                onClick={() => navigate(card.slug)}
                className="group flex flex-col bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Recipe Card Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {card.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Clean unboxed metadata with separators */}
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <span>{card.difficulty}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{card.cookTime} cook</span>
                      <span aria-hidden="true">·</span>
                      <span>{card.cuisine}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-[#C0392B] transition-colors leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#C0392B]">
                    <span>Read Full Guide & Recipe</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Beginner Cooking Tips */}
      <section className="py-16 md:py-20 bg-white border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C0392B]">
              Practical Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Four Golden Rules for Beginner Indian Cooks
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Avoid the frustrating pitfalls that ruin texture and overwhelm spice balance in the home kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-stone-200 bg-[#FAF7F2] space-y-2">
              <span className="text-xs font-mono text-stone-400 font-bold">TIP 01</span>
              <h3 className="text-base font-serif font-bold text-stone-900">
                Low Heat for Sautéing Onions
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Never crank the flame to high to speed up onions. High heat scorches the outer edges, turning them bitter while leaving the core raw and acidic. Give them 10 gentle minutes.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-[#FAF7F2] space-y-2">
              <span className="text-xs font-mono text-stone-400 font-bold">TIP 02</span>
              <h3 className="text-base font-serif font-bold text-stone-900">
                Don't Burn Ground Spices
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Ground turmeric and chilli burn in dry oil in under 5 seconds. Always add them alongside the tomato puree or mix them with 1 tablespoon of water into a slurry first.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-[#FAF7F2] space-y-2">
              <span className="text-xs font-mono text-stone-400 font-bold">TIP 03</span>
              <h3 className="text-base font-serif font-bold text-stone-900">
                Garam Masala Goes at the End
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Unlike ground coriander which needs to cook in the sauce, fragrant garam masala is a delicate finishing spice. Stir it in during the final 2 minutes of cooking to retain its volatile aromatics.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-[#FAF7F2] space-y-2">
              <span className="text-xs font-mono text-stone-400 font-bold">TIP 04</span>
              <h3 className="text-base font-serif font-bold text-stone-900">
                Salt in Two Stages
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Add a pinch of salt to your onions to draw out moisture and accelerate uniform caramelisation, then taste and adjust the seasoning after the curry has simmered and reduced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: AEO Answer Highlights & FAQs */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-stone-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C0392B]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Beginner Indian Cooking Questions Answered Directly
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Concise, verified culinary answers followed by practical home explanations.
            </p>
          </div>

          <div className="space-y-6">
            {homeAeoFaqs.map((faq, idx) => (
              <AeoBlock key={idx} item={faq} />
            ))}
          </div>

          {/* Contextual links box */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 text-center space-y-3">
            <h3 className="text-lg font-serif font-bold text-stone-900">
              Ready to dive into a specific recipe?
            </h3>
            <p className="text-sm text-stone-600 max-w-lg mx-auto">
              Read our in-depth guides for{' '}
              <button
                onClick={() => navigate('/articles/easy-paneer-recipes/')}
                className="text-[#C0392B] font-semibold underline underline-offset-2 hover:text-[#962D22] cursor-pointer"
              >
                making soft paneer curry
              </button>
              , mastering{' '}
              <button
                onClick={() => navigate('/articles/homemade-samosa-recipe/')}
                className="text-[#C0392B] font-semibold underline underline-offset-2 hover:text-[#962D22] cursor-pointer"
              >
                crispy Punjabi samosas
              </button>
              , or brewing{' '}
              <button
                onClick={() => navigate('/articles/how-to-make-masala-chai/')}
                className="text-[#C0392B] font-semibold underline underline-offset-2 hover:text-[#962D22] cursor-pointer"
              >
                authentic stovetop masala chai
              </button>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
