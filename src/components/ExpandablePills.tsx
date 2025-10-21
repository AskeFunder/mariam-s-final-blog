'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExpandablePills() {
    const [isExpanded, setIsExpanded] = useState(false);

    const mainCategories = [
        { href: "/brief", label: "Brief history of art" },
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
        <div className="ml-auto">
            {/* Main categories - always visible, right-aligned */}
            <div className="flex items-center justify-end gap-2 flex-nowrap">
                {mainCategories.map((category, index) => (
                    <div key={category.href} className={index > 0 ? "ml-2" : ""}>
                        <Link
                            href={category.href}
                            className="
              flex items-center justify-center
              bg-white/10 backdrop-blur-sm
              border border-white/20
              text-foreground
              rounded-full
              px-5 py-2.5
              font-medium leading-none text-base font-futura uppercase tracking-wider
              transition-all duration-300 ease-out
              hover:bg-[#00ff00] hover:text-black hover:scale-105 hover:shadow-lg
              active:scale-95
              relative overflow-hidden
              group
            "
                        >
                            {category.label}
                        </Link>
                    </div>
                ))}

                {/* Expand/Collapse button */}
                <div className="ml-2">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="
            w-8 h-8 
            bg-white/10 backdrop-blur-sm
            border border-white/20
            rounded-full flex items-center justify-center
            transition-all duration-300 ease-out
            hover:bg-[#00ff00] hover:text-black hover:scale-105 hover:shadow-lg
            active:scale-95
            group relative overflow-hidden
          "
                    >
                        <span className="text-foreground text-xs font-bold">
                            {isExpanded ? '−' : '...'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Expanded categories - right-aligned with max width constraint */}
            {isExpanded && (
                <div className="w-full max-w-[50%] ml-auto mt-2">
                    <div className="flex flex-wrap justify-end gap-2">
                        {additionalCategories.map((category, index) => (
                            <button
                                key={category}
                                className="
                  flex items-center justify-center
                  bg-white/10 backdrop-blur-sm
                  border border-white/20
                  text-foreground
                  rounded-full
                  px-5 py-2.5
                  font-medium leading-none text-base font-futura uppercase tracking-wider
                  transition-all duration-300 ease-out
                  hover:bg-[#00ff00] hover:text-black hover:scale-105 hover:shadow-lg
                  active:scale-95
                  group relative overflow-hidden
                  shrink-0
                "
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
