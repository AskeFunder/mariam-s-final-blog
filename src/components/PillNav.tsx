import Pill from "./Pill";

export default function PillNav({
    items = [],
}: {
    items?: { href: string; label: string }[];
}) {
    if (!items?.length) return null;

    return (
        <nav
            className="
        flex flex-wrap justify-end 
        gap-x-6 gap-y-4 pr-[96px]
        items-center  /* ✅ ensures pills aren't vertically squashed */
      "
        >
            {items.map(({ href, label }) => (
                <div key={href} className="shrink-0">
                    {/* ✅ wrap each pill in a non-flexing container to preserve padding */}
                    <Pill href={href}>{label}</Pill>
                </div>
            ))}
        </nav>
    );
}
