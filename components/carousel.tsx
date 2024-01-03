'use client'
import Window from '@/components/window'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from 'react'
import '@/styles/carousel.css'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { flushSync } from 'react-dom'

const TWEEN_FACTOR = 3

export default function Carousel(props : any){
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });
    const [tweenValues, setTweenValues] = useState([])
    const onScroll = useCallback(() => {
        if (!emblaApi) return
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
            let diffToTarget = scrollSnap - scrollProgress
            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target()
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
                    }
                })
            }
            const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
            return Math.min(Math.max(tweenValue, 0.8), 1);
        });

        setTweenValues(styles);
    }, [emblaApi, setTweenValues])    

    useEffect(() => {
        if (!emblaApi) return;
        onScroll();
        emblaApi.on('scroll', () => {
            flushSync(() => onScroll());
        })
        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi])
    
    return(
        <>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {props.data.map((project : any, index : number)=>(
                        <div className="embla__slide" key={project.id}>
                            <div
                            style={{
                                ...(tweenValues.length && {
                                    transform: `scale(${tweenValues[index]})`,
                                    opacity: tweenValues[index] < 0.85 ? 0.3 : tweenValues[index],
                                })
                            }}>
                                <Window 
                                name={project.properties.Name.title[0].plain_text} 
                                desc={project.properties.Desc.rich_text[0].plain_text}
                                url={project.properties.URL.url}
                                href={`/projects/${project.id}`}
                                img={project.properties.Image.url}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="embla__prev absolute left-12 mt-[-300px]" onClick={scrollPrev}>
                    <IconArrowLeft />
                </button>
                <button className="embla__next absolute right-12 mt-[-300px]" onClick={scrollNext}><IconArrowRight /></button>
            </div>
        </>
    )
}