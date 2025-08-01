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
                I dabble in full-stack development, UI/UX engineering, and product growth strategy.
                <br/><br/>Currently at Palantir as a Deployment Strategist. Previously at Paramount, Soma Capital, and Skilldeck. On the side, I do freelance consulting and design work for early stage startups.
            </p>
            <PageList db={works} />
            <h2 className="text-left mt-8">Portfolio</h2>
            <p className="text-sm">I enjoy building, designing, and hacking on the side, with lots of coffee.</p>
            <PageList db={projects} /> 
        </main>
    </>)
}