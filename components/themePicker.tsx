'use client'
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function themePicker(){
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return(
        <motion.div className='cursor-pointer' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} onClick={()=>{setTheme(resolvedTheme == 'light' ? 'dark' : 'light')}}>
            {resolvedTheme == 'dark' ? <IconMoon className="hover:opacity-60 ml-4" stroke={1.5} size={22} color="white" /> : <IconSun className="hover:opacity-60  ml-4" stroke={1.5} size={22} color="black" />}
        </motion.div>
    )
}