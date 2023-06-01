import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import SinglePro  from './SinglePro'

const data = [
  {
    id:1,
    title: 'react-todo-App',
    img1: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683137304/parsonal-protfolio/my-portfolio/Screenshot_2023-05-03_210527_rjmz3k.png',
    img2: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683137441/parsonal-protfolio/my-portfolio/Screenshot_2023-05-03_211019_pr7r15.png',
    description: `To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do.`,
    tools: ['javascript','React.js','GSAP','Tailwind css'],
    liveLink: 'https://www.pexels.com/search/tech%20/?orientation=square',
    fontEndLink: 'https://www.linkedin.com/feed/',
    backEndLink: 'https://www.linkedin.com/in/hossain-ahmed-163b11236/'
  },
  {
    id:2,
    title: 'Food Ever',
    img1: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683138139/parsonal-protfolio/my-portfolio/Screenshot_2023-05-03_212145_zibawg.png',
    img2: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683138132/parsonal-protfolio/my-portfolio/Screenshot_2023-05-03_212128_fr5ydi.png',
    description: `These websites are fast, efficient, and easy to use – especially when youre trying to decide what to eat for dinner. You can browse the menus of your favorite fast food restaurants, compare prices, and even order online and have your food delivered. Plus, they're user-friendly and packed with information.`,
    tools: ['react.js','redux toolkit','Tailwind css'],
    liveLink: 'https://www.pexels.com/search/tech%20/?orientation=square',
    frontEndLink: 'https://www.linkedin.com/feed/',
  },
]
const Project = () => {

  return (
    <div className="project container mx-auto mt-32" id="projects">
      <SectionTitle title={'Project'}/>
      <div className="wrapper-projects mt-32 flex flex-col gap-20">
        {
          data.map((project)=>(
            <SinglePro key={project.id} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Project