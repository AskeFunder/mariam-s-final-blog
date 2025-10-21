import { client } from "@/sanity/lib/client";
import { ALL_HOME } from "@/lib/queries";
import FeatureSection from "@/components/FeatureSection";
import CategoryGrid from "@/components/CategoryGrid";
import RecentlySection from "@/components/RecentlySection";

export default async function HomePage() {
  const posts = await client.fetch(ALL_HOME);

  if (!posts || posts.length === 0) return null;

  // Split posts for different sections
  const [first, ...rest] = posts;

  // Ensure we have enough posts for the categories
  const categoryPosts1 = rest.slice(0, 4);
  const categoryPosts2 = rest.slice(4, 8);

  return (
    <div className="space-y-16 lg:space-y-20 py-32">
      {/* Main Featured Section */}
      <FeatureSection items={posts} />

      {/* Recently Section */}
      <RecentlySection
        sectionTitle="Recently on Colossal"
        items={posts.slice(0, 5)}
      />

      {/* Category Grids - only show if we have enough posts */}
      {categoryPosts1.length >= 4 && (
        <CategoryGrid
          categoryTitle="A False Front"
          exploreLink="/explore/trompe-loeil"
          exploreText="Explore trompe l'oeil"
          items={categoryPosts1}
        />
      )}

      {categoryPosts2.length >= 4 && (
        <CategoryGrid
          categoryTitle="Street Art & Murals"
          exploreLink="/explore/street-art"
          exploreText="Explore street art"
          items={categoryPosts2}
        />
      )}
    </div>
  );
}
