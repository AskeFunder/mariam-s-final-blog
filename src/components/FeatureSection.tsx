import FeaturedLarge from "./FeaturedLarge";
import Grid6Small from "./Grid6Small";

type Article = {
    _id: string;
    title: string;
    slug: string;
    cover?: { url?: string; asset?: { url?: string } };
};

export default function FeatureSection({ items }: { items: Article[] }) {
    if (!items || items.length === 0) return null;

    const [first, ...rest] = items;

    return (
        // 🧩 Two-column layout: large feature on the left, grid on the right
        <section
            className="
        flex flex-col lg:flex-row
        items-start justify-between
                gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20
        px-0 py-4
        max-w-none mx-auto relative
      "
        >
            {/* LEFT: Featured large article */}
            <div className="w-full lg:flex-[1.4] rounded-lg overflow-hidden bg-background">
                <FeaturedLarge article={first} />
            </div>

            {/* RIGHT: Six smaller grid items */}
            <div className="w-full lg:flex-[1] overflow-hidden bg-background">
                <Grid6Small items={rest} />
            </div>
        </section>
    );
}
