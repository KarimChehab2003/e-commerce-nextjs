"use client";
import Link from "next/link";
import { navbarLinks } from "@/app/lib/placeholder-data";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function RenderNavLinks() {
    const pathname = usePathname();
    return (
        <>
            {
                navbarLinks.map((link, idx) => (
                    <li key={idx}>
                        <Link href={link.href} className={clsx("font-light text-base-content/80 hover:text-primary transition-colors duration-200 capitalize", {
                            "text-primary ": link.href === pathname
                        })}>{link.label}</Link>
                    </li>
                ))
            }
        </>
    );
}

export default RenderNavLinks;