import Link from "next/link";
import Image from "next/image";

type Article = {
    _id: string;
    title: string;
    slug: string;
    date?: string;
    cover?: { url?: string; asset?: { url?: string } };
};

export default function Grid6Small({ items }: { items: Article[] }) {
    // Format date helper
    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffMinutes < 1) return 'just now';
        if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffDays === 1) return '1 day ago';
        return `${diffDays} days ago`;
    };

    // Define different grid spans for mobile mosaic effect
    const mobileSpans = [
        'col-span-2 row-span-2',  // Item 1: 2x2 (large square)
        'col-span-1 row-span-1',  // Item 2: 1x1 (small)
        'col-span-2 row-span-1',  // Item 3: 2x1 (wide)
        'col-span-1 row-span-1',  // Item 4: 1x1 (small)
        'col-span-1 row-span-2',  // Item 5: 1x2 (tall)
        'col-span-1 row-span-1',  // Item 6: 1x1 (small)
    ];

    // Define different landscape aspect ratios for desktop
    const desktopAspectRatios = [
        'aspect-[4/3]',     // Standard landscape
        'aspect-[3/2]',     // Wide landscape
        'aspect-[5/3]',     // Extra wide
        'aspect-[4/3]',     // Standard landscape
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 bg-background auto-rows-[120px] sm:auto-rows-auto">
            {items.slice(0, 6).map((p, index) => {
                const img = p.cover?.asset?.url ?? p.cover?.url;
                const mobileSpan = mobileSpans[index] || 'col-span-1 row-span-1';
                const desktopAspectRatio = desktopAspectRatios[index % desktopAspectRatios.length] || 'aspect-[4/3]';

                return (
                    <Link
                        key={p._id}
                        href={`/articles/${p.slug}`}
                        className={`group block overflow-hidden transition hover:opacity-90 ${mobileSpan} sm:col-span-1 sm:row-span-1 flex flex-col`}
                    >
                        {img && (
                            <div className={`relative ${desktopAspectRatio} sm:${desktopAspectRatio} overflow-hidden flex-shrink-0`}>
                                <Image
                                    src={img}
                                    alt={p.title}
                                    fill
                                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                        )}
                        <div className="pt-2 sm:pt-3 flex-grow">
                            <h3 className="text-sm sm:text-base font-medium text-foreground leading-snug mb-1 group-hover:text-[#00ff00] transition-colors duration-300 font-futura">
                                {p.title}
                            </h3>
                            <p className="text-xs text-muted">
                                {formatDate(p.date)}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
