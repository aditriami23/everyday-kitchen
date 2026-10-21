import { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { keywordResearchData } from '../data/keywords';
import { Search, Database, FileSpreadsheet, Compass, CheckCircle2, AlertCircle } from 'lucide-react';

interface KeywordResearchPageProps {
  navigate: (path: string) => void;
}

export function KeywordResearchPage({ navigate }: KeywordResearchPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIntent, setFilterIntent] = useState<string>('all');

  const filteredData = keywordResearchData.filter((row) => {
    const matchesSearch =
      row.pageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.primaryKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.secondaryKeyword1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.secondaryKeyword2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.pageUrl.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesIntent = filterIntent === 'all' || row.searchIntent === filterIntent;

    return matchesSearch && matchesIntent;
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': 'The Everyday Kitchen: Keyword Research & SEO Architecture Documentation',
    'description': 'Target keyword matrices, search intent mapping, metadata architecture, and AEO optimization protocols for The Everyday Kitchen culinary blog.',
    'url': 'https://theeverydaykitchen.com/keyword-research/',
    'author': {
      '@type': 'Organization',
      'name': 'The Everyday Kitchen Editorial Team',
    },
  };

  return (
    <div className="min-h-screen pb-24">
      <SeoHead
        title="Keyword Research Documentation | The Everyday Kitchen"
        description="Review the proposed keyword targets, search intent mapping, proposed meta tags, and content architecture for The Everyday Kitchen Indian cooking blog."
        canonicalPath="/keyword-research/"
        ogType="article"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          navigate={navigate}
          items={[{ label: 'Documentation' }, { label: 'Keyword Research' }]}
        />

        {/* Page Header */}
        <header className="space-y-4 my-8">
          <div className="text-xs font-semibold tracking-wider text-[#C0392B] uppercase">
            Editorial Strategy · Search Engine & AI Answer Engine Optimization (AEO)
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-stone-900 leading-tight">
            Keyword Research & Content Architecture Documentation
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-4xl">
            This documentation outlines the proposed keyword targeting strategy, search intent classifications, and metadata frameworks across all core hub and article pages for <strong className="text-stone-900">The Everyday Kitchen</strong>.
          </p>

          {/* Research Status Notice */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <strong className="font-semibold block">Audit Status: Unverified Preliminary Targets</strong>
              <p className="text-amber-900/90 leading-relaxed">
                In strict adherence to editorial integrity, all monthly search volumes, keyword difficulty indices, and competitive metrics are labeled as <strong>Unverified</strong> pending empirical data from Google Search Console and live API audits. No speculative or hallucinated numerical search volume figures are introduced.
              </p>
            </div>
          </div>
        </header>

        {/* Strategy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-[#C0392B] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Pillar 1: Search Intent Alignment</span>
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">
              Beginner Informational Intent
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every target query reflects specific educational friction points: beginners wanting foolproof technique troubleshooting rather than generic ingredient lists.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-[#C0392B] text-xs font-bold uppercase tracking-wider">
              <Database className="w-4 h-4" />
              <span>Pillar 2: AEO Direct Answers</span>
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">
              Answer Engine Optimization
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Targeted natural-language question H2s paired immediately with single-paragraph direct answers to capture Google AI Overviews, Perplexity, and voice search snippets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-[#C0392B] text-xs font-bold uppercase tracking-wider">
              <FileSpreadsheet className="w-4 h-4" />
              <span>Pillar 3: Schema Topology</span>
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">
              Semantic JSON-LD Graphs
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Full Recipe, Article, HowToStep, BreadcrumbList, and FAQPage schemas validate 100% against Schema.org standards with zero fabricated user ratings.
            </p>
          </div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="my-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-stone-200">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by keyword, URL, or page..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C0392B] transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg text-xs">
            {['all', 'Informational', 'Commercial Investigation'].map((intent) => (
              <button
                key={intent}
                onClick={() => setFilterIntent(intent)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  filterIntent === intent
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {intent === 'all' ? 'All Intents' : intent}
              </button>
            ))}
          </div>
        </div>

        {/* Master Keyword Documentation Table */}
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F4EFE6] border-b border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700">
                <th className="p-4 whitespace-nowrap">Page & URL</th>
                <th className="p-4 whitespace-nowrap">Primary Keyword</th>
                <th className="p-4 whitespace-nowrap">Secondary Keywords</th>
                <th className="p-4 whitespace-nowrap">Search Intent</th>
                <th className="p-4 min-w-[280px]">Proposed SEO Title & Meta Description</th>
                <th className="p-4 min-w-[260px]">Strategic Rationale</th>
                <th className="p-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-xs text-stone-700">
              {filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                  {/* Page & URL */}
                  <td className="p-4 align-top">
                    <strong className="block font-serif text-sm text-stone-900 font-bold mb-1">
                      {row.pageName}
                    </strong>
                    <button
                      onClick={() => navigate(row.pageUrl)}
                      className="font-mono text-[11px] text-[#C0392B] hover:underline cursor-pointer"
                    >
                      {row.pageUrl}
                    </button>
                  </td>

                  {/* Primary Keyword */}
                  <td className="p-4 align-top font-semibold text-stone-900">
                    <span className="font-mono text-stone-800 bg-stone-100 px-2 py-1 rounded">
                      {row.primaryKeyword}
                    </span>
                  </td>

                  {/* Secondary Keywords */}
                  <td className="p-4 align-top space-y-1.5">
                    <span className="block font-mono text-stone-600">
                      1. {row.secondaryKeyword1}
                    </span>
                    <span className="block font-mono text-stone-600">
                      2. {row.secondaryKeyword2}
                    </span>
                  </td>

                  {/* Search Intent */}
                  <td className="p-4 align-top">
                    <span className="text-stone-700 font-medium">
                      {row.searchIntent}
                    </span>
                  </td>

                  {/* Proposed Title & Description */}
                  <td className="p-4 align-top space-y-2">
                    <div>
                      <span className="text-[10px] font-mono text-stone-400 block uppercase">
                        Title ({row.proposedTitle.length} chars):
                      </span>
                      <strong className="text-xs text-stone-900 font-medium block">
                        {row.proposedTitle}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-stone-400 block uppercase">
                        Meta Description ({row.proposedMetaDescription.length} chars):
                      </span>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {row.proposedMetaDescription}
                      </p>
                    </div>
                  </td>

                  {/* Strategic Rationale */}
                  <td className="p-4 align-top text-xs text-stone-600 leading-relaxed">
                    {row.strategicRationale}
                  </td>

                  {/* Status */}
                  <td className="p-4 align-top">
                    <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-200/60 inline-block">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Content Hub Internal Linking Matrix */}
        <section className="my-16 p-8 rounded-2xl bg-white border border-stone-200 space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C0392B]">
            Internal Architecture
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Hub-and-Spoke Semantic Internal Linking Architecture
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
            To maximise topical authority without confusing search spiders, The Everyday Kitchen operates on a deliberate hub-and-spoke content topology. The homepage establishes high-level culinary authority on Indian homestyle basics, passing equity to detailed technique spokes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200/80 space-y-2">
              <span className="text-xs font-bold text-stone-900 block">Hub (Homepage)</span>
              <p className="text-xs text-stone-600">
                Links contextually to all 3 core spokes via descriptive anchor texts: <em>"making soft paneer curry"</em>, <em>"crispy Punjabi samosas"</em>, and <em>"authentic stovetop masala chai"</em>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200/80 space-y-2">
              <span className="text-xs font-bold text-stone-900 block">Cross-Article Lateral Links</span>
              <p className="text-xs text-stone-600">
                Samosa guide links to Masala Chai as the natural afternoon tea pairing; Paneer guide cross-references whole-spice tempering foundations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200/80 space-y-2">
              <span className="text-xs font-bold text-stone-900 block">Breadcrumb Hierarchies</span>
              <p className="text-xs text-stone-600">
                Every spoke features microdata BreadcrumbList pointing visitors and Googlebot back to category indexes and the homepage.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
