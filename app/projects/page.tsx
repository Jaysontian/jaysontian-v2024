import Link from "next/link";
import { getDatabase } from "@/lib/notion";
import { Text } from "@/app/projects/[slug]/text";



export const databaseId = process.env.NOTION_DATABASE_ID

export async function generateStaticParams() {
  const database = await getDatabase(databaseId);
  return database.map((post) => ({id: post.id}))
}

export default async function Page({ params }){
    const database = await getDatabase(databaseId);

    return(<>
        <ol>
        {database.map((post) => (
            <li key={post.id}>
            <Link href={`/projects/${post.id}`}>
                <Text text={post.properties.Name.title} />
            </Link>
            </li>
        ))}
        </ol> 
    
    </>)
}