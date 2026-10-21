import { useState, SyntheticEvent } from 'react';
import { Utensils } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '16/10';
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  aspectRatio,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = (_e: SyntheticEvent<HTMLImageElement, Event>) => {
    // If the image path was relative or had a typo, attempt fallback state
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const aspectClass = aspectRatio
    ? aspectRatio === '16/9'
      ? 'aspect-16/9'
      : aspectRatio === '4/3'
      ? 'aspect-4/3'
      : aspectRatio === '16/10'
      ? 'aspect-16/10'
      : 'aspect-square'
    : '';

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectClass} min-h-48 bg-stone-100 border border-stone-200 rounded-xl flex flex-col items-center justify-center p-6 text-center text-stone-500 space-y-2 select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-full bg-stone-200/80 flex items-center justify-center text-stone-400">
          <Utensils className="w-5 h-5" />
        </div>
        <p className="text-xs font-serif italic text-stone-600 max-w-xs">
          {alt}
        </p>
        <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400">
          The Everyday Kitchen Culinary Archive
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className} bg-stone-100`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-90'
        }`}
      />
    </div>
  );
}
