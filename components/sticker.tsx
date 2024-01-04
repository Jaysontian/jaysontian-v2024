'use client'
import { Tooltip } from 'react-tooltip'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import '@/styles/macbook.css'

export default function Sticker(props : any) {
    const [text, setText] = useState(props.text);

    const openlink = () => {
        if (props.href == 'copyemail'){
            navigator.clipboard.writeText('jaysontian@g.ucla.edu');
            setText('Copied!');
        }
        else if (props.href){
            window.open(props.href);
        }
    }

    return(
        <div 
            onClick={()=>{openlink()}} 
            style={{cursor: props.href ? 'pointer' : 'default',}}
            >
            <Image 
                src={props.src} 
                width={props.w} height={props.h} 
                alt='sticker' 
                className='sticker relative' 
                style={{ top: `-${props.t}px`, left: `${props.l}px` }}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={text}
                data-tooltip-place="top"
            ></Image>
            <Tooltip id="my-tooltip" style={{
                backgroundColor: '#212121',
                fontSize: '12px',
                maxWidth: '250px',
                zIndex: 100,
                textAlign: 'center',
                borderRadius: '8px'
            }} />
        </div>
    )
}