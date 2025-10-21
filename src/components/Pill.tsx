import Link from "next/link";
import { ReactNode } from "react";

type PillProps = {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
};

export default function Pill({ href, onClick, children, className = "" }: PillProps) {
    const base =
        // Modern pill design with subtle shadows and better spacing
        "inline-flex items-center justify-center rounded-full " +
        "text-[var(--foreground)] text-sm font-medium " +
        // Modern padding and spacing
        "px-6 py-2.5 " +
        // Subtle background with modern glassmorphism effect
        "bg-white/80 backdrop-blur-sm border border-white/20 " +
        "shadow-sm hover:shadow-md " +
        "transition-all duration-300 ease-out " +
        "hover:bg-white/90 hover:scale-105 hover:border-white/30 " +
        "active:scale-95";

    const cls = `${base} ${className}`.trim();

    if (href)
        return (
            <Link href={href} className={cls}>
                {children}
            </Link>
        );

    return (
        <button onClick={onClick} className={cls}>
            {children}
        </button>
    );
}
