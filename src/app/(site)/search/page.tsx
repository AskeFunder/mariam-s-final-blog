'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { SEARCH_ARTICLES } from '@/lib/queries';

type Article = {
    _id: string;
    title: string;
    slug: string;
    cover?: { url?: string; asset?: { url?: string } };
};

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const [searchResults, setSearchResults] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if (query.trim()) {
            performSearch(query.trim());
        }
    }, [query]);

    const performSearch = async (searchTerm: string) => {
        setLoading(true);
        setHasSearched(true);

        try {
            const results = await client.fetch(SEARCH_ARTICLES, {
                searchTerm: `*${searchTerm}*`
            });
            setSearchResults(results || []);
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-8 sm:px-16 md:px-24 lg:px-32">
                {/* Search Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        {query ? `Search results for "${query}"` : 'Search'}
                    </h1>
                    {query && (
                        <p className="text-muted">
                            {loading ? 'Searching...' : `${searchResults.length} results found`}
                        </p>
                    )}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center py-16">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
                    </div>
                )}

                {/* No Search Query */}
                {!query && (
                    <div className="text-center py-16">
                        <p className="text-muted text-lg">
                            Enter a search term to find articles
                        </p>
                    </div>
                )}

                {/* Search Results */}
                {!loading && hasSearched && (
                    <>
                        {searchResults.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {searchResults.map((article) => {
                                    const img = article.cover?.asset?.url ?? article.cover?.url;

                                    return (
                                        <Link
                                            key={article._id}
                                            href={`/articles/${article.slug}`}
                                            className="group block"
                                        >
                                            {img && (
                                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                                                    <Image
                                                        src={img}
                                                        alt={article.title}
                                                        fill
                                                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                                                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                                    />
                                                </div>
                                            )}
                                            <h3 className="text-base font-medium text-foreground leading-snug group-hover:text-muted transition-colors duration-200">
                                                {article.title}
                                            </h3>
                                        </Link>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-muted text-lg">
                                    No articles found for "{query}"
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}


