'use client'

import { motion } from 'framer-motion'
import { IconSun, IconMoon } from '@tabler/icons-react';
import NavLink from '@/components/navlink'
import { useTheme } from 'next-themes'

const links = [
    {label: 'home', href: '/'},
    {label: 'about', href: '/about'},
    {label: 'portfolio', href: '/projects'},
]

export default function Header() {
    const { theme, setTheme } = useTheme();

    const menu = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }
    const menuitems = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration:0.4,
            }
        },
        hidden: {
            opacity: 0,
            y: -50,
        },
    }

    return(
        <header className="sticky top-0 z-1 main-header backdrop-blur-md bg-header " suppressHydrationWarning>
            <nav className="md:px-2 py-4 max-w-[600px] mx-auto flex justify justify-between items-center">
                <div></div>
                <motion.ul 
                    className="flex justify-between gap-4 text-sm" 
                    initial="hidden"
                    animate="visible"
                    variants={menu}
                    >
                    {links.map((link) => (
                        <motion.li 
                            key={link.href} 
                            className="text-stone-500 hover:text-stone-700"
                            variants={menuitems}
                            >
                            <NavLink href={link.href}>{link.label}</NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.div className='cursor-pointer' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} onClick={()=>{setTheme(theme == 'light' ? 'dark' : 'light')}}>
                    {theme == 'light' ? <IconSun stroke={1.5} size={22} /> : <IconMoon stroke={1.5} size={22} color="white" />}
                </motion.div>
            </nav>
        </header>
    );
}