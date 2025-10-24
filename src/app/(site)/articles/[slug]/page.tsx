import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { ARTICLE_BY_SLUG } from '@/lib/queries';
import { format } from 'date-fns';
import Image from 'next/image';
import RichText from '@/components/RichText';

export const revalidate = 0; // always fresh in dev

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(ARTICLE_BY_SLUG, { slug: params.slug });
  if (!post) return notFound();

  // Pick a hero (cover → first gallery → first body image)
  const heroFromCover = post?.coverMedia?.asset;
  const heroFromGallery = post?.gallery?.[0]?.asset;
  const heroFromBody = (post?.body || []).find((b: { _type?: string }) => b?._type === 'image')?.asset;

  const heroAsset = heroFromCover || heroFromGallery || heroFromBody || null;
  const heroUrl: string | undefined = heroAsset?.url;
  const dims = heroAsset?.metadata?.dimensions;
  const heroW = Math.round(dims?.width ?? 1600);
  const heroH = Math.round(dims?.height ?? 900);
  const heroAssetId: string | null = heroAsset?._id ?? null;

  return (
    <article className="prose prose-invert">
      {/* Big hero photo */}
      {heroUrl && (
        <div className="relative mb-6 w-full overflow-hidden rounded-lg">
          <Image
            src={heroUrl}
            alt={post.title}
            width={heroW}
            height={heroH}
            sizes="100vw"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      {/* Title (and optional date) */}
      <h1>{post.title}</h1>
      {post.date && (
        <p className="opacity-70 text-sm">{format(new Date(post.date), 'MMM d, yyyy')}</p>
      )}

      {/* Body: fully dynamic (text, image, image, text…) */}
      {post.body && <RichText value={post.body} heroAssetId={heroAssetId} />}

      {/* Optional credits */}
      {post.credits && <p className="mt-6 text-sm opacity-70">Credits: {post.credits}</p>}
    </article>
  );
}
