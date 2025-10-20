import { client } from '@/sanity/lib/client';
import { ALL_HOME } from '@/lib/queries';
import MasonryFeed from '@/components/MasonryFeed';

export default async function Home() {
  const posts = await client.fetch(ALL_HOME);
  return <MasonryFeed items={posts} />;
}