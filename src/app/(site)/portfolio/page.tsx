import { client } from '@/sanity/lib/client';
import { PORTFOLIO_GRID } from '@/lib/queries';
import Grid4x4 from '@/components/Grid4x4';

export default async function Portfolio() {
  const items = await client.fetch(PORTFOLIO_GRID);
  return <Grid4x4 items={items} />;
}