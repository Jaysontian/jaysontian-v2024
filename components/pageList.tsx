'use client'

import PageLink from '@/components/pageLink'
import { motion } from "framer-motion"

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { opacity: 1, x: 0, transition: {duration: 0.4} },
  hidden: { opacity: 0, x: -100 },
}

export default function pageList(props : any){
    return(
        <motion.ol 
            className="my-4 flex flex-col hover:text-stone-400 transition"
            initial="hidden"
            animate="visible"
            variants={list}
            >
            {props.db.map((post:any) => {
                const desc = post.properties.Desc.rich_text.length > 0 ? post.properties.Desc.rich_text[0].plain_text : null;
                const icon = typeof post.icon.external == 'object' ? post.icon.external.url : null;
                const emoji = typeof post.icon.emoji === 'string' ? post.icon.emoji : null;
                return (
                    <motion.li 
                        key={post.id} 
                        className=' last:border-b-0 py-0.5'
                        variants={item}
                        >
                        <PageLink name={post.properties.Name.title} id={post.id} icon={icon} desc={desc} emoji={emoji}/>
                    </motion.li>
                )
            })}
        </motion.ol>
    );
}