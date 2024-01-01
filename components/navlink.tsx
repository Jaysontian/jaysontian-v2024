"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({href, children} : NavLinkProps) {
    const pathname = `/${usePathname().split("/")[1]}`;
    const active = pathname === href;

    const style = active ? "px-4 py-1.5 rounded-full bg-linkHover transition text-black" : 'px-4 py-1.5 rounded-full transition';

    return(
        <Link className={style}  href={href}>{children}</Link>
    );

}