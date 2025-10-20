// src/components/RichText.jsx
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

function layoutPreset(layout) {
  switch (layout) {
    case 's':   return { className: 'max-w-md mx-auto',            sizes: '(min-width:1024px) 32rem, 90vw',  px: 800 };
    case 'l':   return { className: '-mx-4 md:mx-0 md:max-w-5xl',  sizes: '(min-width:1024px) 80ch, 100vw', px: 1600 };
    case 'full':return { className: '-mx-4 md:-mx-8 lg:-mx-16',    sizes: '100vw',                           px: 1920 };
    default:    return { className: '',                             sizes: '(min-width:1024px) 65ch, 90vw',   px: 1200 }; // 'm'
  }
}

function alignClasses(align, layout) {
  if (layout === 'full' || layout === 'l') return ''; // wide/full shouldn't float
  switch (align) {
    case 'left':  return 'md:float-left md:mr-6 md:max-w-sm';
    case 'right': return 'md:float-right md:ml-6 md:max-w-sm';
    default:      return 'mx-auto';
  }
}

export default function RichText({ value, heroAssetId = null }) {
  if (!value?.length) return null;

  const components = {
    types: {
      image: ({ value }) => {
        const asset = value?.asset;
        if (!asset) return null;
        if (heroAssetId && asset._id === heroAssetId) return null; // don’t duplicate hero

        const dims = asset.metadata?.dimensions;
        const aspect = dims ? dims.width / dims.height : 16 / 9;

        const preset = layoutPreset(value?.layout);
        const targetW = Math.min(preset.px, Math.round(dims?.width ?? preset.px));
        const targetH = Math.round(targetW / aspect);

        const src = urlFor(value).width(targetW).quality(80).url();
        const alt = value?.alt || '';
        const caption = value?.caption;

        return (
          <figure className={`my-6 ${preset.className} ${alignClasses(value?.align, value?.layout)}`}>
            <Image
              src={src}
              alt={alt}
              width={targetW}
              height={targetH}
              sizes={preset.sizes}
              className="h-auto w-full rounded-lg object-cover"
            />
            {caption && (
              <figcaption className="mt-2 text-sm opacity-70">{caption}</figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return <PortableText value={value} components={components} />;
}
