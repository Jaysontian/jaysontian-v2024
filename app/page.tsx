import { getDatabase } from '@/lib/notion'
import Galaxy from '@/components/galaxy'
import Project from '@/components/window'

// Home page
let databaseId:string = process.env.NOTION_DATABASE_ID ?? '';

export default async function Page() {
  const data = await getDatabase(databaseId, 'Featured');
  //console.log(data[0]);
  return (
    <>
      <main className="flex flex-col items-center antialiased font-medium md:gap-10">
        <div className='flex flex-col gap-10 mt-[10vh] md:gap-10 md:mt-[12vh]'>
          <p style={{'color':'black'}}>Hi! I'm Jayson Tian. I'm a software & interface engineer, entrepreneur, artist, barista, and brain-science geek. I particularly enjoy exploring the intersection between software, interface design, and human behaviour. I'm currently studying Computer Science at UCLA.</p>
        </div>

        <div className='flex flex-col gap-10 mt-60'>
          <h2 className="text-center">- featured work -</h2>
          {data.map((project : any)=>(
            <Project 
              name={project.properties.Name.title[0].plain_text} 
              desc={project.properties.Desc.rich_text[0].plain_text}
              url={project.properties.URL.url}
              href={`/projects/${project.id}`}
              img={project.properties.Image.url}
            />
          ))}
        </div>
        <div className="mb-60"></div>
      </main>
      <Galaxy />
    </>
  )
}
