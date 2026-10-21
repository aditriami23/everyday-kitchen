import { HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface AeoBlockProps {
  item: FAQItem;
  badgeLabel?: string;
}

export function AeoBlock({ item }: AeoBlockProps) {
  return (
    <article className="my-8 rounded-xl border border-stone-200/80 bg-[#F4EFE6]/70 p-6 md:p-8 transition-shadow duration-200 hover:shadow-xs">
      <div className="flex items-start gap-3 mb-3">
        <HelpCircle className="w-5 h-5 text-[#C0392B] shrink-0 mt-1" aria-hidden="true" />
        <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
          {item.question}
        </h2>
      </div>

      {/* Direct Concise Answer */}
      <div className="mb-4 pl-8">
        <p className="text-base md:text-lg font-medium text-stone-950 leading-relaxed bg-white/70 rounded-lg p-4 border border-stone-200/60">
          <strong className="text-[#C0392B] font-semibold">Direct Answer: </strong>
          {item.directAnswer}
        </p>
      </div>

      {/* Detailed Supporting Explanation */}
      <div className="pl-8 text-stone-700 text-sm md:text-base leading-relaxed space-y-2">
        <p>{item.detailedExplanation}</p>
      </div>
    </article>
  );
}
