import Image from "next/image";
import Link from "next/link";

type Article = {
    _id: string;
    title: string;
    slug: string;
    cover?: { url?: string; asset?: { url?: string } };
};

export default function FeaturedLarge({ article }: { article: Article }) {
    const img = article.cover?.asset?.url ?? article.cover?.url;

    return (
        <Link
            href={`/articles/${article.slug}`}
            className="group block w-full bg-background rounded-lg overflow-hidden"
        >
            {/* 🧭 Title and metadata */}
            <div className="px-6 pt-10 pb-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-3 group-hover:underline underline-offset-4 group-hover:text-pink-500 transition-colors duration-300">
                    {article.title}
                </h2>

                <div className="flex justify-between text-sm text-muted">
                    <span>October 20, 2025</span>
                    <span>Kate Mothes</span>
                </div>
            </div>

            {/* 🖼️ Portrait image */}
            {img && (
                <div className="px-6 pb-8">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                        <Image
                            src={img}
                            alt={article.title}
                            fill
                            sizes="(min-width:1024px) 66vw, 100vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            )}
        </Link>
    );
}
