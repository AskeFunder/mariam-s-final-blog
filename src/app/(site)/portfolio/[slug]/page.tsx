import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PORTFOLIO_BY_SLUG } from '@/lib/queries';
import { PortableText } from '@portabletext/react';

export default async function PortfolioItem({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await client.fetch(PORTFOLIO_BY_SLUG, { slug });
  if (!item) return notFound();

  return (
    <article className="prose prose-invert">
      <h1>{item.title}</h1>
      {item.body && <PortableText value={item.body} />}
      {item.pressLinks?.length ? (
        <ul className="mt-6">
          {item.pressLinks.map((url: string, i: number) => (
            <li key={i}><a href={url} target="_blank" rel="noreferrer">{url}</a></li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}