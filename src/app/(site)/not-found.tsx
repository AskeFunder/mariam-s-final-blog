import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl text-center py-24">
      <h1 className="text-3xl font-semibold">Not found</h1>
      <p className="mt-2 text-neutral-300">
        The page you’re looking for doesn’t exist (yet).
      </p>
      <Link href="/" className="mt-6 inline-block rounded-md border border-white/20 px-4 py-2">
        Go home
      </Link>
    </div>
  );
}
