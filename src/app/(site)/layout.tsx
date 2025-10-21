// src/app/(site)/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* Add spacing below the header */}
      <main className="mx-auto max-w-none px-6 sm:px-12 md:px-16 lg:px-20 mt-12 pb-48">
        {children}
      </main>
      <Footer />
    </>
  );
}
