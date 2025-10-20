// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Curator Blog
        </Link>
        <nav className="flex gap-4 text-sm text-neutral-300">
          <Link href="/brief">Brief</Link>
          <Link href="/notes-on-art">Notes on art</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
