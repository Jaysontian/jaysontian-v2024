'use client'

import '@/styles/galaxy.css'
import { useState, useEffect, useCallback} from 'react'

import layer1 from "@/assets/layer1.webp";
import layer2 from "/assets/layer2.webp";
import layer3 from "/assets/layer3.webp";
import layer4 from "/assets/layer4.webp";
import layer5 from "/assets/layer5.webp";

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Galaxy() {
    const blurCache = window ? localStorage.getItem('blur') : null;
    const [blur, setBlur] = useState(blurCache ? blurCache : '');

    const blurGalaxy = () => {
        const { pageYOffset, scrollY } = window;

        if (scrollY != 0){
            setBlur('blurred');
            localStorage.setItem('blur', 'blurred');
        }
        else {
            setBlur('');
            localStorage.setItem('blur', '');
        }
    }

    const onScroll = useCallback((event : any) => {
        blurGalaxy();
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        blurGalaxy();

        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
        };
    }, []);

    // Parallax Implementation
    if (typeof document !== `undefined`) {
        const parallax = (e : any) => {
            document.querySelectorAll(".layer").forEach((layer : any) => {
            var speed = layer.getAttribute("data-speed");
            var x = (window.innerWidth - e.pageX * speed) / 100;
            var y = (window.innerHeight - e.pageY * speed) / 100;
            //console.log(x, y)
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }
        
        const restore = () => {
            document.querySelectorAll(".layer").forEach((layer : any) => {
            layer.transition = "transform 0.6s ease-in-out";
            layer.style.transform = `translateX(0px) translateY(0px)`;
            });
        }

        document.addEventListener("mousemove", parallax);
        document.addEventListener("mouseleave", restore);
    }

    return(
        <div className={`galaxy ${blur}`}>
            <div className="galaxy-con">
                <div className="galaxy-frame">
                    <motion.div initial={false} className="layer baselayer">
                        <Image src={layer1} alt="Layer 1 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} data-speed="6" className="layer">
                        <Image src={layer2} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} data-speed="-15" className="layer">
                        <Image src={layer3} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} data-speed="24" className="layer">
                        <Image src={layer4} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>
                    <motion.div initial={false} className="lighten layer">
                        <Image src={layer5} alt="Layer 2 of Star Drawing"></Image>
                    </motion.div>
                </div>
            </div>
        </div>
    )


}