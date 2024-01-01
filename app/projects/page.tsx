import ProjectLink from '@/components/projectLink'
import { getDatabase } from "@/lib/notion";


export const databaseId = process.env.NOTION_DATABASE_ID

export async function generateStaticParams() {
  const database = await getDatabase(databaseId, 'Projects');
  return database.map((post) => ({id: post.id}))
}

export default async function Page({ params }){
    const projects = await getDatabase(databaseId, 'Projects');
    const works = await getDatabase(databaseId, 'Work');
    //console.log(database[0]);

    return(<>
        <main className='py-6'>
            <h2 className="text-center">work</h2>
            <p className="text-sm/5">I am currently working on a side venture called Nebulo along with my studies. In the past I have worked with Tim Wihaya on Skilldeck, and founded a NGO organization.</p>
            <ol className="my-4 flex flex-col hover:text-stone-400 transition">
                {works.map((post) => {
                    const desc = post.properties.Desc.rich_text.length > 0 ? post.properties.Desc.rich_text[0].plain_text : null;
                    const icon = typeof post.icon.external == 'object' ? post.icon.external.url : null;
                    const emoji = typeof post.icon.emoji === 'string' ? post.icon.emoji : null;
                    return (
                        <li key={post.id} className='border-b last:border-b-0'>
                            <ProjectLink name={post.properties.Name.title} id={post.id} icon={icon} desc={desc} emoji={emoji}/>
                        </li>
                    )
                })}
            </ol>
            <h2 className="text-center mt-8">projects</h2>
            <p className="text-sm/5">I enjoy hacking on the side.</p>
            <ol className="my-4 flex flex-col hover:text-stone-400 transition">
                {projects.map((post) => {
                    const desc = post.properties.Desc.rich_text.length > 0 ? post.properties.Desc.rich_text[0].plain_text : null;
                    const icon = post.icon.type === 'external' ? post.icon.external.url : null;
                    const emoji = post.icon.type === 'emoji' ? post.icon.emoji : null;
                    return (
                        <li key={post.id} className='border-b last:border-b-0'>
                            <ProjectLink name={post.properties.Name.title} id={post.id} icon={icon} desc={desc} emoji={emoji}/>
                        </li>
                    )
                })}
            </ol>
        </main>
    </>)
}