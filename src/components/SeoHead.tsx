import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: object | object[];
}

export function SeoHead({
  title,
  description,
  canonicalPath,
  ogImage = '/src/assets/images/home_hero_indian_feast_1792556801180.jpg',
  ogType = 'website',
  jsonLd,
}: SeoHeadProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Link
    const fullCanonical = typeof window !== 'undefined'
      ? `${window.location.origin}${canonicalPath}`
      : `https://theeverydaykitchen.com${canonicalPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 4. Update OpenGraph Tags
    const updateMeta = (prop: string, content: string) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:url', fullCanonical);
    updateMeta('og:type', ogType);
    updateMeta('og:site_name', 'The Everyday Kitchen');
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http')
        ? ogImage
        : `${typeof window !== 'undefined' ? window.location.origin : ''}${ogImage}`;
      updateMeta('og:image', fullImageUrl);
    }

    // 5. Update Twitter Tags
    const updateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterMeta('twitter:card', 'summary_large_image');
    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);

    // 6. Inject or Update JSON-LD
    const SCRIPT_ID = 'seo-structured-data';
    let scriptTag = document.getElementById(SCRIPT_ID);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = SCRIPT_ID;
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    if (jsonLd) {
      scriptTag.textContent = JSON.stringify(jsonLd, null, 2);
    }

    return () => {
      // Clean up script on unmount if needed
    };
  }, [title, description, canonicalPath, ogImage, ogType, jsonLd]);

  return null;
}
