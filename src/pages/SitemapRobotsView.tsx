import { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Copy, Check, FileCode } from 'lucide-react';

interface SitemapRobotsViewProps {
  type: 'sitemap' | 'robots';
  navigate: (path: string) => void;
}

export function SitemapRobotsView({ type, navigate }: SitemapRobotsViewProps) {
  const [copied, setCopied] = useState(false);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://theeverydaykitchen.com/</loc>
    <lastmod>2026-10-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://theeverydaykitchen.com/articles/easy-paneer-recipes/</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://theeverydaykitchen.com/articles/homemade-samosa-recipe/</loc>
    <lastmod>2026-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://theeverydaykitchen.com/articles/how-to-make-masala-chai/</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://theeverydaykitchen.com/keyword-research/</loc>
    <lastmod>2026-10-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://theeverydaykitchen.com/sitemap.xml`;

  const content = type === 'sitemap' ? sitemapXml : robotsTxt;
  const title = type === 'sitemap' ? 'XML Sitemap (sitemap.xml)' : 'Robots Exclusion Standard (robots.txt)';

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pb-24">
      <SeoHead
        title={`${title} | The Everyday Kitchen`}
        description={`Technical search engine crawler directive and structure for ${title}.`}
        canonicalPath={type === 'sitemap' ? '/sitemap.xml' : '/robots.txt'}
        ogType="website"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          navigate={navigate}
          items={[{ label: 'Technical SEO' }, { label: title }]}
        />

        <div className="my-8 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#C0392B] uppercase">
              Crawler & Search Engine Interface
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              {title}
            </h1>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Raw Code'}</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
          <pre>{content}</pre>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-1">
          <p className="font-semibold text-stone-900 flex items-center gap-1.5">
            <FileCode className="w-4 h-4 text-[#C0392B]" />
            Direct file access:
          </p>
          <p>
            This file is physically served from the public root directory at{' '}
            <code className="text-[#C0392B] font-mono">/{type === 'sitemap' ? 'sitemap.xml' : 'robots.txt'}</code>{' '}
            for automated search engine crawlers and XML validators.
          </p>
        </div>
      </div>
    </div>
  );
}
