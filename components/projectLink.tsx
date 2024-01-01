import Link from "next/link";
import { Text } from "@/app/projects/[slug]/text";
import { IconArrowUpRight } from '@tabler/icons-react';

export default function projectLink(props : any){
    return(
        <Link href={`/projects/${props.id}`} prefetch={true} >
            <div className='flex justify-between items-center text-sm py-2 hover:text-stone-600 transition'>
                <div className="flex gap-1 items-center">
                    <div className='flex items-center bg-stone-200/70 w-6 h-6 rounded mr-2 overflow-hidden'>
                        {props.icon ? <img src={props.icon} className='w-5 h-5 m-auto object-cover'></img> :
                            <p className='text-md text-center w-full'>{props.emoji}</p>
                        }
                    </div>
                    <Text text={props.name} />
                    <IconArrowUpRight size={16} />
                </div>
                <p className='text-xs text-stone-400'>{props.desc}</p>
            </div>
        </Link>
    )
    
}