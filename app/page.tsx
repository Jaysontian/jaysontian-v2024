
import Galaxy from '@/components/galaxy'
import Project from '@/components/project'

import Matcha from '@/assets/matcha.png'

import { getDatabase } from '@/lib/notion'

// Home page

const sampleProjects = [
  {title: "Skilldeck.me", desc: "An all-in-one CRM tool for freelance designers"},
  {title: "Matcha", desc: "Learning how to update stuff here", img: Matcha},
  {title: "Cosmos", desc: "Learning how to update stuff here"},
]

export default async function Home() {
  const data = await getDatabase(process.env.NOTION_DATABASE_ID, 'Featured');
  //console.log(data[0]);


  return (
    <>
      <main className="flex flex-col items-center antialiased font-medium md:gap-10">
        <div className='flex flex-col gap-10 md:gap-10 md:mt-[20vh]'>
          <p>Hi! I'm Jayson Tian. I'm a software & interface engineer, entrepreneur, artist, barista, and brain-science geek. I particularly enjoy exploring the intersection between software, interface design, and human behaviour. I'm currently studying Computer Science at UCLA.</p>
        </div>

        <div className='flex flex-col gap-10 mt-60'>
          <h2>Featured Projects</h2>
          {data.map((project)=>(
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
