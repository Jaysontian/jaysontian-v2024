'use client'
import PageLink from '@/components/pageLink'

export default function pageList(props : any){
    return(
        <ol className="my-4 flex flex-col hover:text-stone-400 transition">
            {props.db.map((post:any) => {
                const desc = post.properties.Desc.rich_text.length > 0 ? post.properties.Desc.rich_text[0].plain_text : null;
                const icon = typeof post.icon.external == 'object' ? post.icon.external.url : null;
                const emoji = typeof post.icon.emoji === 'string' ? post.icon.emoji : null;
                return (
                    <li key={post.id} className='border-b border-soft100 last:border-b-0 py-1'>
                        <PageLink name={post.properties.Name.title} id={post.id} icon={icon} desc={desc} emoji={emoji}/>
                    </li>
                )
            })}
        </ol>
    );
}