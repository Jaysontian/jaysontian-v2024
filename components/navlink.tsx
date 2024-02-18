"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({href, children} : NavLinkProps) {
    const pathname = `/${usePathname().split("/")[1]}`;
    const active = pathname === href;

    const style = active ? "px-4 py-2 rounded-full bg-soft100 transition text-prim" : "px-4 py-2 rounded-full transition text-soft200";

    return(
        <Link className={cn(style, " hover:text-prim")}  href={href}>{children}</Link>
    );

}