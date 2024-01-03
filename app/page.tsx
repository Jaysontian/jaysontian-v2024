import { getDatabase } from '@/lib/notion'
import Galaxy from '@/components/galaxy'
import Carousel from '@/components/carousel'

// Home page
let databaseId:string = process.env.NOTION_DATABASE_ID ?? '';

export default async function Page() {
  const data = await getDatabase(databaseId, 'Featured');

  return (
    <>
      <main className="flex flex-col items-center antialiased font-medium md:gap-4">
        <div className='flex flex-col gap-10 mt-[10vh] md:gap-10 md:mt-[12vh]'>
          <p style={{'color':'black'}}>Hi! I'm Jayson Tian. I'm a software & interface engineer, entrepreneur, artist, barista, and brain-science geek. I particularly enjoy exploring the intersection between software, interface design, and human behaviour. I'm currently studying Computer Science at UCLA.</p>
        </div>
        <h2 className="mt-64 text-center">Featured Work</h2>
        <Carousel data={data} />
        <div className="mb-6"></div>
      </main>
      <Galaxy />
    </>
  )
}
