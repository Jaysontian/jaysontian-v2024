
import Macbook from '@/components/macbook'
import PageList from '@/components/pageList'
import { getDatabase } from "@/lib/notion";

const databaseId = process.env.NOTION_DATABASE_ID!;

export default async function About(){
    const articles = await getDatabase(databaseId, 'Post');
    return(
        <main className='pt-4'>
            <Macbook />
            <PageList db={articles} />
        </main>
    )
}