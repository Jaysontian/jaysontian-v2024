import PageList from '@/components/pageList'
import { getDatabase } from "@/lib/notion";


const databaseId = process.env.NOTION_DATABASE_ID!;

export default async function Page({ params } : { params : any}){
    const projects = await getDatabase(databaseId, 'Projects');
    const works = await getDatabase(databaseId, 'Work');
    //console.log(database[0]);

    return(<>
        <main className='py-6 text-prim'>
            <h2 className="text-center">Work</h2>
            <p className="text-sm/5">I am currently working on a side venture called Nebulo along with my studies. In the past I have worked with Tim Wihaya on Skilldeck, and founded a NGO organization.</p>
            <PageList db={works} />
            <h2 className="text-center mt-8">Projects</h2>
            <p className="text-sm/5">I enjoy hacking on the side.</p>
            <PageList db={projects} />
        </main>
    </>)
}