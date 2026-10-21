interface FooterProps {
  navigate: (path: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-[#F4EFE6] text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-serif font-black tracking-tight text-stone-900 block">
              The Everyday Kitchen
            </span>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm">
              An educational cooking publication dedicated to demystifying Indian culinary fundamentals for beginner home cooks. Tested techniques, pantry essentials, and foolproof recipes.
            </p>
            <p className="text-xs text-stone-500 italic">
              Crafted with warm spice notes, authentic methods, and generous whitespace.
            </p>
          </div>

          {/* Core Recipe Articles */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              Featured Guides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/articles/easy-paneer-recipes/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  Easy Paneer Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/homemade-samosa-recipe/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  Homemade Samosa Recipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/how-to-make-masala-chai/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  How to Make Masala Chai
                </button>
              </li>
            </ul>
          </div>

          {/* Culinary Foundations */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              Foundations
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  Beginner Indian Cooking
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/easy-paneer-recipes/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  Keeping Paneer Soft
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/homemade-samosa-recipe/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  Crispy Pastry Dough (Moyen)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/how-to-make-masala-chai/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  Milk-to-Water Chai Ratios
                </button>
              </li>
            </ul>
          </div>

          {/* Documentation & Crawlers */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              SEO & Architecture
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/keyword-research/')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left"
                >
                  Keyword Research Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/sitemap.xml')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left font-mono text-xs"
                >
                  sitemap.xml
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/robots.txt')}
                  className="hover:text-[#C0392B] transition-colors cursor-pointer text-left font-mono text-xs"
                >
                  robots.txt
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} The Everyday Kitchen. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Cooking times and temperatures are advisory; adapt to your specific home stove and kitchen setup.
          </p>
        </div>
      </div>
    </footer>
  );
}
