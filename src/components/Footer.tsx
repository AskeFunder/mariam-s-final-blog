import localFont from "next/font/local";

const bbhSansBartle = localFont({
  src: "../fonts/BBHSansBartle-Regular.ttf",
  display: "swap",
});

export default function Footer() {
  return (
    <>

      {/* Footer */}
      <footer className="bg-[#fcf6e9] text-foreground">
        <div className="pb-16 pt-0 px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="text-left">
            <h3 className="text-6xl md:text-9xl font-semibold mb-2 font-futura">CRAVING MORE</h3>
            <h3 className="text-4xl md:text-6xl font-semibold mb-2">
              <span className={bbhSansBartle.className}>RELAUNCHED</span>
              <span className="font-futura">?</span>
            </h3>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 font-futura uppercase">SUBSCRIBE TO OUR E-MAIL</h3>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 font-futura">NEWSLETTER</h3>

            {/* Tilted SUBSCRIBE - positioned below newsletter */}
            <div className="flex justify-center -mt-4 pb-16" style={{ transform: 'translateX(-15%)' }}>
              <div className="flex items-center transform -rotate-12 group">
                {['S', 'U', 'B', 'S', 'C', 'R', 'I', 'B', 'E'].map((letter, index) => {
                  const colors = ['text-green-500', 'text-blue-500', 'text-red-500', 'text-cyan-500', 'text-pink-500', 'text-yellow-500', 'text-orange-500', 'text-blue-600', 'text-yellow-500'];
                  const rotations = ['group-hover:rotate-12', 'group-hover:-rotate-6', 'group-hover:rotate-8', 'group-hover:-rotate-12', 'group-hover:rotate-6', 'group-hover:-rotate-8', 'group-hover:rotate-10', 'group-hover:-rotate-4', 'group-hover:rotate-14'];
                  return (
                    <span
                      key={index}
                      className={`text-[11rem] md:text-[13rem] font-bold font-persona ${colors[index]} inline-block mr-4 transition-transform duration-200 ${rotations[index]} group-hover:scale-110`}
                    >
                      {letter}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="text-sm text-green-200">
              © {new Date().getFullYear()} · All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
