'use client';
import Image from 'next/image';
import Link from 'next/link';

type Item = {
  _id: string;
  title: string;
  slug: string;
  category: 'brief' | 'notes-on-art';
  cover?: { url: string };
};

export default function MasonryFeed({ items }: { items: Item[] }) {
  return (
    <div
      className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] [&>article]:mb-4"
    >
      {items?.map((p) => (
        <article
          key={p._id}
          className="break-inside-avoid overflow-hidden rounded-lg bg-white/5"
        >
          {p.cover?.url && (
            <Image
              src={p.cover.url}
              alt={p.title}
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
          )}
          <div className="p-4">
            <div className="text-xs uppercase tracking-wide opacity-70">
              {p.category}
            </div>
            <h3 className="mt-1 text-lg font-semibold">
                <Link className="hover:opacity-90 transition" href={`/articles/${p.slug}`}>{p.title}</Link>
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
