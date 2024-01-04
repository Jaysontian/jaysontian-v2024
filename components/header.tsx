'use client'

import { IconSun } from '@tabler/icons-react';
import NavLink from '@/components/navlink'

const links = [
    {label: 'home', href: '/'},
    {label: 'about', href: '/about'},
    {label: 'portfolio', href: '/projects'},
]

export default function Header() {
    return(
        <header className="sticky top-0 z-1 main-header backdrop-blur-md bg-header ">
            <nav className="md:px-2 py-4 max-w-[600px] mx-auto flex justify justify-between items-center">
                <div></div>
                <ul className="flex justify-between gap-4 text-sm">
                    {links.map((link) => (
                        <li key={link.href} className="text-stone-500 hover:text-stone-700">
                            <NavLink href={link.href}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className='cursor-pointer' onClick={()=>{alert('change theme');}}>
                    <IconSun stroke={1.5} size={22} />
                </div>
            </nav>
        </header>
    );
}