import SectionTitle from './SectionTitle';
import SinglePro  from './SinglePro'

const data = [
  {
    id:1,
    title: 'react-todo-App',
    img1: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1678809893/parsonal-protfolio/pexels-photo-1647978_cctqx9.jpg',
    img2: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1678809892/parsonal-protfolio/pexels-photo-793782_vazs70.webp',
    description: 'The aPP ikfh nfwoif  oijwdfoifwo  roijioa  oioij hiuo jhj aalmm9oilfk  jdiadf  oipdjkski   dodfjukjsdkff  dffdpognvf  09ikpksdslfjdef0kldf  ijsflkfkgfjgreoi  woij',
    tools: ['node.js','Express.js','MangoDB','Firebase','Tailwind css'],
    liveLink: 'https://www.pexels.com/search/tech%20/?orientation=square',
    fontEndLink: 'https://www.linkedin.com/feed/',
    backEndLink: 'https://www.linkedin.com/in/hossain-ahmed-163b11236/'
  },
  {
    id:2,
    title: 'Alraji-Bank',
    img1: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1678809892/parsonal-protfolio/pexels-photo-3394651_utxvct.jpg',
    img2: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1678809892/parsonal-protfolio/pexels-photo-2268509_wym2oj.jpg',
    description: 'The aPP ikfh nfwoif  oijwdfoifwo wdrslkifjoi i jiouweoiu eo0r oi fpo oikjglkeg   oie oifpwi opi fji iooij',
    tools: ['node.js','Express.js','MangoDB','Firebase','Tailwind css'],
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