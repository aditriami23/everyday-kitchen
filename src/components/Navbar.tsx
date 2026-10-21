import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export function Navbar({ currentPath, navigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Easy Paneer', path: '/articles/easy-paneer-recipes/' },
    { label: 'Crispy Samosas', path: '/articles/homemade-samosa-recipe/' },
    { label: 'Masala Chai', path: '/articles/how-to-make-masala-chai/' },
    { label: 'Keyword Research', path: '/keyword-research/' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single Brand Wordmark */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNav('/')}
              className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] rounded"
              aria-label="The Everyday Kitchen - Home"
            >
              <span className="block text-xl md:text-2xl font-serif font-black tracking-tight text-stone-900 group-hover:text-[#C0392B] transition-colors whitespace-nowrap">
                The Everyday Kitchen
              </span>
            </button>
          </div>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#C0392B] font-semibold'
                      : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C0392B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNav('/articles/easy-paneer-recipes/')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#C0392B] hover:bg-[#A93226] active:scale-[0.98] rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              Start Cooking
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-stone-100 text-[#C0392B] font-bold'
                    : 'text-stone-700 hover:bg-stone-100/70 hover:text-stone-950'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNav('/articles/easy-paneer-recipes/')}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#C0392B] rounded-lg cursor-pointer"
            >
              Start Cooking Guides
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
