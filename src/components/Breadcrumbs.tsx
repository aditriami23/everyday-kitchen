import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  navigate: (path: string) => void;
}

export function Breadcrumbs({ items, navigate }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-stone-500 font-medium">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <button
            onClick={() => navigate('/')}
            className="hover:text-[#C0392B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] rounded cursor-pointer"
          >
            Home
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <span className="text-stone-300" aria-hidden="true">/</span>
              <li>
                {isLast || !item.href ? (
                  <span className="text-stone-800 font-semibold truncate max-w-xs md:max-w-md inline-block" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => navigate(item.href!)}
                    className="hover:text-[#C0392B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] rounded cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
