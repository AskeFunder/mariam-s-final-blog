import Link from "next/link";
import Image from "next/image";

type CategoryItem = {
    _id: string;
    title: string;
    slug: string;
    cover?: { url?: string; asset?: { url?: string } };
};

type CategoryGridProps = {
    categoryTitle: string;
    exploreLink: string;
    exploreText: string;
    items: CategoryItem[];
};

export default function CategoryGrid({
    categoryTitle,
    exploreLink,
    exploreText,
    items
}: CategoryGridProps) {
    // Define different landscape aspect ratios for mosaic effect
    const landscapeRatios = [
        'aspect-[4/3]',     // Standard landscape
        'aspect-[3/2]',     // Wide landscape
        'aspect-[5/3]',     // Extra wide
        'aspect-[4/3]',     // Standard landscape
    ];

    return (
        <section className="w-full">
            {/* Top Divider - Full screen width */}
            <div className="w-screen h-px bg-[#DED7BD] mb-8 -ml-6 sm:-ml-12 md:-ml-16 lg:-ml-20"></div>

            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {categoryTitle}
                </h2>
                <Link
                    href={exploreLink}
                    className="text-foreground hover:text-muted transition-colors duration-200 text-sm md:text-base"
                >
                    {exploreText} →
                </Link>
            </div>

            {/* 4-Item Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {items.slice(0, 4).map((item, index) => {
                    const img = item.cover?.asset?.url ?? item.cover?.url;
                    const aspectRatio = landscapeRatios[index] || 'aspect-[4/3]';

                    return (
                        <Link
                            key={item._id}
                            href={`/articles/${item.slug}`}
                            className="group block"
                        >
                            {img && (
                                <div className={`relative ${aspectRatio} overflow-hidden rounded-lg mb-4`}>
                                    <Image
                                        src={img}
                                        alt={item.title}
                                        fill
                                        sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                    />
                                </div>
                            )}
                            <h3 className="text-sm md:text-base font-medium text-foreground leading-snug group-hover:text-pink-500 transition-colors duration-300">
                                {item.title}
                            </h3>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
