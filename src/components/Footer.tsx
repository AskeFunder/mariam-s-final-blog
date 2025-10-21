export default function Footer() {
  return (
    <>
      {/* Image Section */}
      <div className="relative w-full h-[250px]">
        {/* Placeholder for your drawing - replace with your actual image */}
        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <div className="text-slate-600 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <p className="text-lg font-medium">Your Drawing Goes Here</p>
            <p className="text-sm">Replace this with your actual image</p>
          </div>
        </div>
      </div>

      {/* Green Footer */}
      <footer className="bg-green-800 text-white">
        <div className="mx-auto max-w-6xl px-6 sm:px-12 md:px-16 lg:px-20 py-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Curator Blog</h3>
            <p className="text-green-100 mb-6">
              Exploring art, culture, and creativity
            </p>
            <div className="text-sm text-green-200">
              © {new Date().getFullYear()} · All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
