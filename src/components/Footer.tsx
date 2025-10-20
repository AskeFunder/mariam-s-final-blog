// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
        © {new Date().getFullYear()} · Curator Blog
      </div>
    </footer>
  );
}
