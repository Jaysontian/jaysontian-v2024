import { getDatabase } from '@/lib/notion'
import Galaxy from '@/components/galaxy'
import Carousel from '@/components/carousel'

// Home page
let databaseId:string = process.env.NOTION_DATABASE_ID ?? '';

export default async function Page() {
  const data = await getDatabase(databaseId, 'Featured');

  return (
    <>
      <Galaxy />
      <main className="text-prim flex flex-col items-center antialiased font-medium md:gap-4">
        <div className="flex flex-row h-[calc(100vh-8rem)] items-center align-middle">
          <p className='text-white text-[13pt] leading-[1.5] pb-[16vh] select-none'>Hi! I'm Jayson Tian. I'm a software & interface engineer, entrepreneur, artist, barista, and brain-science geek. I particularly enjoy exploring the intersection between software, interface design, and human behaviour. I'm currently studying Computer Science at UCLA.</p>
        </div>
        <Carousel data={data} />
        <div className="mb-6"></div>
      </main>
    </>
  )
}