import PageList from '@/components/pageList'
import { getDatabase } from "@/lib/notion";


const databaseId = process.env.NOTION_DATABASE_ID!;

export default async function Page({ params } : { params : any}){
    const projects = await getDatabase(databaseId, 'Projects');
    const works = await getDatabase(databaseId, 'Work');
    //console.log(database[0]);

    return(<>
        <main className='py-6 text-prim'>
            <br></br>
            {/* <h2 className="text-left">Work</h2> */}
            <p className="text-sm">
                I have experience in product and venture. 
                Currently a PM Intern at Paramount,
                Scout for Soma Capital, and building two side ventures.
                In the past I have worked with Tim Wihaya on Skilldeck, and founded a NGO organization.</p>
            <PageList db={works} />
            <h2 className="text-left mt-8">Projects</h2>
            <p className="text-sm">I enjoy hacking, building, and designing on the side.</p>
            <PageList db={projects} /> 
        </main>
    </>)
}