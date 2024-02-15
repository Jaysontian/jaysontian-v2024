'use client'

import '@/styles/galaxy.css'
import { useState, useEffect, useCallback, useRef} from 'react'

import layer1 from "@/assets/layer1.webp";
import layer2 from "/assets/layer2.webp";
import layer3 from "/assets/layer3.webp";
import layer4 from "/assets/layer4.webp";
import layer5 from "/assets/layer5.webp";

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useOnLoadImages } from '@/lib/useOnLoadImages';


export default function Galaxy() {
    // const wrapperRefHTML = useRef<HTMLDivElement>(null);
    // const imagesLoaded = useOnLoadImages(wrapperRefHTML);

    //const blurCache = typeof localStorage.getItem('blur') !== "undefined" ? localStorage.getItem('blur') : null;
    const [blur, setBlur] = useState<string | null>('');
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const blurCache = localStorage.getItem('blur') ? localStorage.getItem('blur') : '';
        setBlur(blurCache);
        window.addEventListener("scroll", onScroll, { passive: true });
        blurGalaxy();
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        };
    }, []);

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
        <div className="galaxy-wrapper select-none">
            <div className={`galaxy ${blur}`}>
                <motion.div 
                    className="galaxy-con" 
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 100}} 
                    transition={{ duration: 0.8 }}
                >
                    <div className="galaxy-frame">
                        <motion.div initial={false} className="layer baselayer">
                            <Image src={layer1} alt="Layer 1 of Star Drawing" className="image" onLoad={()=>{setImageLoaded(true)}}></Image>
                        </motion.div>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} data-speed="6" className="layer">
                            <Image src={layer2} alt="Layer 2 of Star Drawing" className="image"></Image>
                        </motion.div>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} data-speed="-15" className="layer">
                            <Image src={layer3} alt="Layer 2 of Star Drawing" className="image"></Image>
                        </motion.div>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} data-speed="24" className="layer">
                            <Image src={layer4} alt="Layer 2 of Star Drawing" className="image"></Image>
                        </motion.div>
                        {/* <motion.div initial={false} className="lighten layer">
                            <Image src={layer5} alt="Layer 2 of Star Drawing"></Image>
                        </motion.div> */}
                    </div>
                </motion.div>
            </div>
        </div>
    )


}