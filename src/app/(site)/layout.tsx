// src/app/(site)/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <Footer />
    </>
  );
}
