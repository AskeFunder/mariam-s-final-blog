import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const bbhSansBartle = localFont({
    src: "../fonts/BBHSansBartle-Regular.ttf",
    display: "swap",
});

type Article = {
    _id: string;
    title: string;
    slug: string;
    date?: string;
    cover?: { url?: string; asset?: { url?: string } };
};

type RecentlySectionProps = {
    sectionTitle: string;
    items: Article[];
};

export default function RecentlySection({
    items
}: RecentlySectionProps) {
    if (!items || items.length < 5) return null;

    const [featured, ...smallItems] = items;

    // Format date helper
    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return '1 day ago';
        return `${diffDays} days ago`;
    };

    return (
        <section className="w-full">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                <span className="font-futura">Recently on </span>
                <span className={bbhSansBartle.className}>RELAUNCHED</span>
            </h2>

            {/* Layout: 4 small items on left, 1 large featured on right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left side: 2x2 grid of small items */}
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {smallItems.slice(0, 4).map((item) => {
                            const img = item.cover?.asset?.url ?? item.cover?.url;

                            return (
                                <Link
                                    key={item._id}
                                    href={`/articles/${item.slug}`}
                                    className="group block"
                                >
                                    {img && (
                                        <div className="relative aspect-[4/3] overflow-hidden mb-3">
                                            <Image
                                                src={img}
                                                alt={item.title}
                                                fill
                                                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-sm md:text-base font-medium text-foreground leading-snug mb-1 group-hover:text-[#00ff00] transition-colors duration-300 font-futura">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-muted">
                                        {formatDate(item.date)}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Right side: Large featured item */}
                <div className="lg:col-span-1">
                    <Link
                        href={`/articles/${featured.slug}`}
                        className="group block"
                    >
                        {featured.cover?.asset?.url && (
                            <div className="relative aspect-[3/4] overflow-hidden mb-4">
                                <Image
                                    src={featured.cover.asset.url}
                                    alt={featured.title}
                                    fill
                                    sizes="(min-width:1024px) 33vw, 100vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                        )}
                        <h3 className="text-lg md:text-xl font-medium text-foreground leading-snug mb-2 group-hover:text-[#00ff00] transition-colors duration-300 font-futura">
                            {featured.title}
                        </h3>
                        <p className="text-sm text-muted">
                            {formatDate(featured.date)}
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
