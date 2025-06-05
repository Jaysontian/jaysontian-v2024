'use client'
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ThemePickerProps = {
  isHeaderHovered: boolean;
};

export default function ThemePicker({ isHeaderHovered }: ThemePickerProps) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return (
        <motion.div 
            className="relative h-full flex items-center w-16 cursor-pointer"
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.8
            }}
            onClick={() => setTheme(resolvedTheme == 'light' ? 'dark' : 'light')}
        >
            <div className="px-4 py-2 rounded-lg transition text-soft200 hover:text-prim relative z-10 w-full flex justify-center">
                <div className="relative flex items-center justify-center h-full w-full py-1">
                    {/* Icon - moves up when hovered */}
                    <motion.div 
                        className="flex items-center justify-center"
                        animate={{
                            scale: isHeaderHovered ? 0.95 : 1,
                            y: isHeaderHovered ? -6 : 0,
                            marginBottom: isHeaderHovered ? 4 : 0,
                        }}
                        transition={{ 
                            type: "spring", 
                            damping: 20, 
                            stiffness: 300,
                            mass: 0.8
                        }}
                    >
                        {resolvedTheme == 'dark' ? 
                            <IconMoon size={20} className="text-prim" /> : 
                            <IconSun size={20} className="text-prim" />
                        }
                    </motion.div>
                    
                    {/* Text - positioned below the moved icon */}
                    <AnimatePresence>
                        {isHeaderHovered && (
                            <motion.span 
                                className="text-[8pt] whitespace-nowrap absolute"
                                style={{ 
                                    top: '50%', 
                                    marginTop: '4px',
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
                                Theme
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
