'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import ThemePicker from '@/components/themePicker'
import { IconHome, IconUser, IconBriefcase } from '@tabler/icons-react'

// Simple NavLink component
type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive: boolean;
  isHeaderHovered: boolean;
};

function NavLink({ href, children, isActive, isHeaderHovered }: NavLinkProps) {
    return (
        <motion.div 
            className="relative h-full flex items-center w-16"
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.8
            }}>
            <Link 
                className="px-4 py-2 rounded-lg transition text-soft200 hover:text-prim relative z-10 w-full flex justify-center" 
                href={href}
            >
                {children}
            </Link>
            {isActive && (
                <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-soft100 rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    }}
                />
            )}
        </motion.div>
    );
}

// Links data
const links = [
    {label: 'Home', href: '/', icon: IconHome},
    {label: 'About', href: '/about', icon: IconUser},
    {label: 'Portfolio', href: '/projects', icon: IconBriefcase},
]

// Main Header component
export default function Header() {
    const [isHovered, setIsHovered] = useState(false)
    const pathname = `/${usePathname().split("/")[1]}`;

    return (
        <div className="sticky z-20 w-full" style={{ top: '1rem', height: '60px', width: "full" }}>
            <motion.header 
                className="backdrop-blur-md bg-header px-2 left-0"
                style={{ width: '300px' }}
                animate={{
                    width: isHovered ? 310 : 300,
                    height: isHovered ? 60 : 44,
                    top: isHovered ? 0 : 8
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 1
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <nav className="h-full py-2 flex justify-between items-center">
                    <ul className="flex justify-between flex-1 text-sm h-full items-center">
                        {links.map((link) => (
                            <li key={link.href} className="text-stone-500 flex justify-center h-full">
                                <NavLink 
                                    href={link.href} 
                                    isActive={pathname === link.href}
                                    isHeaderHovered={isHovered}
                                >
                                    <div className="relative flex items-center justify-center h-full w-full py-1">
                                        {/* Icon - moves up when hovered */}
                                        <motion.div 
                                            className="flex items-center justify-center"
                                            animate={{
                                                scale: isHovered ? 0.95 : 1,
                                                y: isHovered ? -6 : 0, // Move icon up when header is hovered
                                                marginBottom: isHovered ? 4 : 0,
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ 
                                                type: "spring", 
                                                damping: 20, 
                                                stiffness: 300,
                                                mass: 0.8
                                            }}
                                        >
                                            <link.icon size={20} className="text-prim" />
                                        </motion.div>
                                        
                                        {/* Text - positioned below the moved icon, within NavLink bounds */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.span 
                                                    className="text-[8pt] whitespace-nowrap absolute"
                                                    style={{ 
                                                        top: '50%', 
                                                        marginTop: '4px', // Position below the moved icon
                                                    }}
                                                    initial={{ opacity: 0, y: 4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 4 }}
                                                    transition={{ 
                                                        type: "spring",
                                                        damping: 20,
                                                        stiffness: 300,
                                                        mass: 0.6
                                                    }}
                                                >
                                                    {link.label}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                        <div className="">
                            <ThemePicker isHeaderHovered={isHovered} />
                        </div>
                    </ul>
                </nav>
            </motion.header>
        </div>
    );
}
