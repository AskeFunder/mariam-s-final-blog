import { client } from '@/sanity/lib/client';
import { BY_CATEGORY } from '@/lib/queries';
import Grid3x3 from '@/components/Grid3x3';

export default async function NotesOnArt() {
  const posts = await client.fetch(BY_CATEGORY, { cat: 'notes-on-art' });
  return <Grid3x3 items={posts} />;
}
