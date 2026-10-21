import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticleView } from './components/ArticleView';
import { KeywordResearchPage } from './pages/KeywordResearchPage';
import { SitemapRobotsView } from './pages/SitemapRobotsView';
import { recipesData } from './data/recipes';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching logic (handles trailing slashes gracefully)
  const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1
    ? currentPath.slice(0, -1)
    : currentPath;

  const renderCurrentPage = () => {
    if (normalizedPath === '' || normalizedPath === '/') {
      return <HomePage navigate={navigate} />;
    }

    if (normalizedPath === '/articles/easy-paneer-recipes') {
      return (
        <ArticleView
          recipe={recipesData['easy-paneer-recipes']}
          navigate={navigate}
        />
      );
    }

    if (normalizedPath === '/articles/homemade-samosa-recipe') {
      return (
        <ArticleView
          recipe={recipesData['homemade-samosa-recipe']}
          navigate={navigate}
        />
      );
    }

    if (normalizedPath === '/articles/how-to-make-masala-chai') {
      return (
        <ArticleView
          recipe={recipesData['how-to-make-masala-chai']}
          navigate={navigate}
        />
      );
    }

    if (normalizedPath === '/keyword-research') {
      return <KeywordResearchPage navigate={navigate} />;
    }

    if (normalizedPath === '/sitemap.xml') {
      return <SitemapRobotsView type="sitemap" navigate={navigate} />;
    }

    if (normalizedPath === '/robots.txt') {
      return <SitemapRobotsView type="robots" navigate={navigate} />;
    }

    // 404 fallback page
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <span className="text-xs font-semibold text-[#C0392B] uppercase tracking-wider mb-2">
          Page Not Found
        </span>
        <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">
          Looking for a recipe?
        </h1>
        <p className="text-stone-600 text-sm max-w-md mb-6">
          The page you requested might have been moved or does not exist. Explore our beginner Indian guides below:
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 bg-[#C0392B] text-white text-xs font-semibold rounded-lg hover:bg-[#A93226] transition-colors cursor-pointer"
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#24211D]">
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
