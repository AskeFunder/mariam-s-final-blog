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
        // block so padding is guaranteed, center text vertically
        "inline-flex items-center justify-center rounded-full border border-[var(--foreground)] " +
        "text-[var(--foreground)] text-base font-medium " +
        // ✅ internal padding — space between text & border
        "px-70 py-3 " + // 24px left/right, 12px top/bottom
        "bg-transparent transition-colors duration-200 " +
        "hover:bg-[var(--foreground)] hover:text-[var(--background)]";

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
