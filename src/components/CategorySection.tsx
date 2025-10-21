import CategoryGrid from "./CategoryGrid";

type Article = {
    _id: string;
    title: string;
    slug: string;
    cover?: { url?: string; asset?: { url?: string } };
};

type CategorySectionProps = {
    categories: {
        title: string;
        exploreLink: string;
        exploreText: string;
        items: Article[];
    }[];
};

export default function CategorySection({ categories }: CategorySectionProps) {
    return (
        <div className="space-y-16 lg:space-y-20">
            {categories.map((category, index) => (
                <CategoryGrid
                    key={`${category.title}-${index}`}
                    categoryTitle={category.title}
                    exploreLink={category.exploreLink}
                    exploreText={category.exploreText}
                    items={category.items}
                />
            ))}
        </div>
    );
}

