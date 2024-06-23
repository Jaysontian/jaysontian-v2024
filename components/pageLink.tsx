import Link from "next/link";
import { Text } from "@/app/projects/[id]/text";
import { IconArrowUpRight } from '@tabler/icons-react';

export default function pageLink(props : any){
    return(
        <Link href={`/projects/${props.id}`} prefetch={true} >
            <div className='flex justify-between items-center text-sm py-2 px-1.5 hover:text-prim transition hover:bg-soft100 rounded'>
                <div className="flex gap-1 items-center text-prim">
                    <div className='flex items-center bg-soft200 w-6 h-6 rounded mr-2 overflow-hidden'>
                        {props.icon ? <img src={props.icon} className='w-5 h-5 m-auto object-cover'></img> :
                            <p className='text-md text-center w-full'>{props.emoji}</p>
                        }
                    </div>
                    <Text text={props.name} />
                    <div className='opacity-25'><IconArrowUpRight size={16} /></div>
                </div>
                <p className='text-sm text-soft100 hidden md:block'>{props.desc}</p>
            </div>
        </Link>
    )
    
}