'use client'
import { Tooltip } from 'react-tooltip'
import Image, { StaticImageData } from 'next/image'

import '@/styles/macbook.css'

export default function Sticker({src, w, h, t, l, text} : {src:StaticImageData, w:number, h:number, t:number, l:number, text:string}) {
    return(
        <>
            <Image 
                src={src} 
                width={w} height={h} 
                alt='sticker' 
                className='sticker relative' 
                style={{ top: `-${t}px`, left: `${l}px` }}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={text}
                data-tooltip-place="top"
            ></Image>
            <Tooltip id="my-tooltip" style={{
                backgroundColor: '#212121',
                fontSize: '11.5px',
                maxWidth: '250px',
                zIndex: '999',
                textAlign: 'center',
                borderRadius: '8px',

            }} />
        </>
    )
}