"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({href, children} : NavLinkProps) {
    const pathname = `/${usePathname().split("/")[1]}`;
    const active = pathname === href;

    return(
        <div className="relative">
            <div className="px-4 py-2">
                <Link className="rounded-full transition text-soft200 hover:text-prim relative z-10" href={href}>
                    {children}
                </Link>
                {active && (
                    <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-soft100 rounded-full"
                        initial={{ opacity: 0, scaleY: 0.8 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.8 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            duration: 0.2 
                        }}
                    />
                )}
            </div>
        </div>
    );
}