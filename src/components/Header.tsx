'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import localFont from "next/font/local";
import ExpandablePills from "./ExpandablePills";

const bbhSansBartle = localFont({
  src: "../fonts/BBHSansBartle-Regular.ttf",
  display: "swap",
});

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-background">
      <div className="flex w-full flex-col gap-6 py-8">
        {/* ROW 1: RELAUNCHED (left) + Search (right) */}
        <div className="flex flex-col sm:flex-row w-full items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 py-6 gap-4 sm:gap-0">
          <Link
            href="/"
            className={`
              text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl
              tracking-tight leading-none
              text-foreground
              font-normal
              flex-shrink-0
              ${bbhSansBartle.className}
            `}
          >
            RELAUNCHED
          </Link>

          {/* Search bar */}
          <form
            role="search"
            onSubmit={handleSearch}
            className="w-full max-w-[240px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px] 2xl:max-w-[320px] h-8 sm:h-8 md:h-9 lg:h-10
             flex items-center rounded-full
             bg-muted/10 border-[1.5px] border-muted/30
             hover:border-foreground/30
             focus-within:border-foreground/60
             backdrop-blur-sm px-2 sm:px-2 md:px-3 flex-shrink-0"
          >
            <input
              type="search"
              placeholder="Search…"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
    flex-1 bg-transparent
    appearance-none border-none outline-none
    text-xs sm:text-sm md:text-sm text-foreground
    placeholder:text-muted
    px-1 sm:px-2 md:px-2 py-0.5 sm:py-1 md:py-1.5
    focus:ring-0 focus:outline-none
    selection:bg-foreground selection:text-background
  "
            />

          </form>
        </div>

        {/* ROW 2: Expandable pills navigation */}
        <div className="flex justify-end items-center flex-wrap px-6 sm:px-12 md:px-16 lg:px-20">
          <ExpandablePills />
        </div>
      </div>
    </header>
  );
}
