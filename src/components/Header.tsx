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
      <div className="flex w-full flex-col gap-3 py-8">
        {/* ROW 1: RELAUNCHED (left) + Search (right) */}
        <div className="flex flex-col sm:flex-row w-full items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 py-3 gap-4 sm:gap-0">
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
            className="w-full max-w-[280px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-[360px] h-10 sm:h-10 md:h-11 lg:h-12
             flex items-center rounded-full
             bg-white/20 backdrop-blur-md border border-white/30
             hover:bg-white/30 hover:border-white/50 hover:shadow-lg
             focus-within:bg-white/40 focus-within:border-white/60 focus-within:shadow-xl
             transition-all duration-300 ease-out px-5 py-3 flex-shrink-0 font-futura"
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
    text-sm sm:text-base md:text-base text-foreground
    placeholder:text-foreground/60
    px-2 py-1
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