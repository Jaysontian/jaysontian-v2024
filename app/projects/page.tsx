import Link from "next/link";
import { getDatabase } from "@/lib/notion";
import { Text } from "@/app/projects/[slug]/text";

export const databaseId = process.env.NOTION_DATABASE_ID

export async function generateStaticParams() {
  const database = await getDatabase(databaseId, 'Projects');
  return database.map((post) => ({id: post.id}))
}

export default async function Page({ params }){
    const database = await getDatabase(databaseId, 'Projects');

    return(<>
        <main>
            <ol>
                {database.map((post) => (
                    <li key={post.id}>
                        <Link href={`/projects/${post.id}`} prefetch={true}>
                            <Text text={post.properties.Name.title} />
                        </Link>
                    </li>
                ))}
            </ol>
        </main>
    </>)
}