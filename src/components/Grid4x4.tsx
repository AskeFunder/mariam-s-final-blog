// src/components/Grid4x4.tsx
import Image from 'next/image';
import Link from 'next/link';

type PortfolioCard = {
  _id: string;
  title: string;
  slug: string;
  hero?: { url: string };
};

export default function Grid4x4({ items }: { items: PortfolioCard[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items?.map((it) => (
        <Link
          key={it._id}
          href={`/portfolio/${it.slug}`}
          className="group block overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label={it.title}
        >
          {/* Optional hero image */}
          {it.hero?.url && (
            <div className="relative aspect-square w-full overflow-hidden md:aspect-[4/3]">
              <Image
                src={it.hero.url}
                alt={it.title}
                fill
                sizes="(min-width:768px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority={false}
              />
            </div>
          )}

          <div className="p-3 md:p-4">
            <h3 className="text-sm font-medium">{it.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

