import Image from 'next/image';
import Link from 'next/link';

type ArticleCard = {
  _id: string;
  title: string;
  slug: string;
  cover?: { url?: string; asset?: { url?: string } };
};

export default function Grid3x3({ items }: { items: ArticleCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items?.map((p) => {
        const img = p.cover?.asset?.url ?? p.cover?.url;
        return (
          <Link
            key={p._id}
            href={`/articles/${p.slug}`}
            className="group block overflow-hidden rounded-lg bg-[var(--background)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/30"
            aria-label={p.title}
          >
            {img && (
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {p.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
