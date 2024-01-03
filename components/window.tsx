"use client"
import Image from 'next/image'
 
// Parent: app/page.tsx (index)
// Looks like a safari window for rendering featured projects

export default function Window(props : any){
    return(
        <div className="flex flex-col w-full gap-10">
            <div className="w-full h-96 bg-white/60 rounded-lg border border-stone-300/75 shadow-xl grayscale hover:grayscale-0 hover:scale-105 transition overflow-hidden">
                <div className="bg-stone-200/50 py-2.5 px-4 flex justify-between items-center">
                    <div className="flex">
                        <div className="w-3 h-3 bg-red-300 rounded-full mr-1.5"></div>
                        <div className="w-3 h-3 bg-yellow-300 rounded-full mr-1.5"></div>
                        <div className="w-3 h-3 bg-green-300 rounded-full mr-1.5"></div>
                    </div>
                    <div className="bg-stone-200 w-3/5 py-0.5 text-xs text-stone-500 rounded-md text-center">
                        {props.url ? <a href={props.url}>{props.url}</a>: props.name}
                    </div>
                    <div className="w-8"></div>
                </div>
                <div className="flex h-4/5 justify-between px-4 items-center gap-8">
                    {props.img == null ? null :
                        <img alt={props.name} className="w-2/5 rounded-md" src={props.img}></img>
                    }
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-semibold">{props.name}</h2>
                        <p className="text-sm text-gray-500">{props.desc}</p>
                        <a className="text-sm border-b-2 w-fit border-gray-300" href={props.href}>Read Study</a>
                    </div>
                </div>
            </div>
        </div>
    )
}