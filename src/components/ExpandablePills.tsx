'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExpandablePills() {
    const [isExpanded, setIsExpanded] = useState(false);

    const mainCategories = [
        { href: "/brief", label: "Brief" },
        { href: "/notes-on-art", label: "Notes on art" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" }
    ];

    const additionalCategories = [
        'Animation', 'Books', 'Climate', 'Film', 'History',
        'Conversations', 'Illustration', 'Music', 'Nature',
        'Opportunities', 'Science', 'Social Issues'
    ];

    return (
        <div className="max-w-[30%] ml-auto">
            {/* Main categories - always visible, right-aligned */}
            <div className="flex items-center justify-end gap-2">
                {mainCategories.map((category, index) => (
                    <div key={category.href} className={index > 0 ? "ml-2" : ""}>
                        <Link
                            href={category.href}
                            className="
              flex items-center justify-center
              border-[1.5px] border-foreground
              text-foreground
              rounded-full
              px-3 py-1
              font-medium leading-none text-sm
              transition-all duration-300
              hover:bg-foreground hover:text-background
              relative overflow-hidden
              group
            "
                        >
                            {category.label}
                            {/* Pink sparkles on hover */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-1"></div>
                                <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-2"></div>
                                <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-3"></div>
                                <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-4"></div>
                                <div className="absolute top-3 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-5"></div>
                            </div>
                        </Link>
                    </div>
                ))}

                {/* Expand/Collapse button */}
                <div className="ml-2">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="
            w-6 h-6 
            border-[1.5px] border-foreground
            rounded-full flex items-center justify-center
            transition-all duration-300
            hover:bg-foreground hover:text-background
            group relative overflow-hidden
          "
                    >
                        <span className="text-foreground text-xs font-bold">
                            {isExpanded ? '−' : '...'}
                        </span>
                        {/* Pink sparkles on hover */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-1"></div>
                            <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-2"></div>
                            <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-3"></div>
                            <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-4"></div>
                            <div className="absolute top-3 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-5"></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Expanded categories - instant show/hide with staggered layout */}
            {isExpanded && (
                <div className="w-full mt-2">
                    {additionalCategories.slice().reverse().map((category, index) => (
                        <div
                            key={category}
                            className="inline-block mb-1"
                            style={{
                                marginRight: `${(index % 3) * 8}px`,
                                marginTop: `${(index % 2) * 4}px`
                            }}
                        >
                            <button
                                className="
                  flex items-center justify-center
                  border-[1.5px] border-foreground
                  text-foreground
                  rounded-full
                  px-3 py-1
                  font-medium leading-none text-sm
                  transition-all duration-300
                  hover:bg-foreground hover:text-background
                  group relative overflow-hidden
                "
                            >
                                {category}
                                {/* Pink sparkles on hover */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-1"></div>
                                    <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-2"></div>
                                    <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-3"></div>
                                    <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-4"></div>
                                    <div className="absolute top-3 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-5"></div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
