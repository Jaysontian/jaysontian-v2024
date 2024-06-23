'use client'
import { motion } from 'framer-motion'
import NavLink from '@/components/navlink'
import ThemePicker from '@/components/themePicker'

const links = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Portfolio', href: '/projects'},
]

export default function Header() {
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
        <motion.header initial={{opacity: 0}} animate={{opacity:1}} className="w-full md:w-auto sticky top-2 z-20 main-header backdrop-blur-md bg-header px-4">
            <nav className="md:mx-0 py-3 max-w-[600px] mx-auto flex justify justify-between items-center">
                <div className="hidden md:block"></div>
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
                <ThemePicker />
            </nav>
        </motion.header>
    );
}