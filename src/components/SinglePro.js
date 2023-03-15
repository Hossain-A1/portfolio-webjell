import { useRef } from "react";
import { UseHoverEfff } from "../hooks/UseHoverEfff";

const SinglePro = ({project}) => {
  const proR = useRef(null);

  UseHoverEfff(proR, project.img1,project.img2)

  return (
    <div className="project grid grid-cols-5">
      <div className="pro-l col-span-3 flex flex-col gap-10 ">
        <span className="xl:text-9xl lg:text-7xl text-gray-50/40">{String(project.id).padStart(2,0)}</span>
        <h3 className="uppercase text-3xl text-teal-400 leading-relaxed">{project.title}</h3>
        <p className="text-white/75 text-xl">{project.description}</p>
        <span  className="flex flex-col gap-2 flex-wrap capitalize text-teal-400">{project?.tools?.map((tool,i)=>(
          <p key={i} >{tool}</p>
        ))}</span>
        <div className="btns flex gap-10 flex-wrap ">
          <a href={project.liveLink} target='_blank' rel="noreferrer" className="uppercase py-4 px-8 border border-gray-400 rounded-full hover:text-teal-400 duration-300  ">Live project</a>
          <a href={project.frontEndLink} target='_blank' rel="noreferrer" className="uppercase py-4 px-8 border border-gray-400 rounded-full hover:text-teal-400 duration-300  ">Font-end Code</a>
         {
          project.backEndLink && (
            <a href={project.backEndLink} target='_blank' rel="noreferrer" className="uppercase py-4 px-8 border border-gray-400 rounded-full hover:text-teal-400 duration-300  ">Back-End Code</a>
          )
         }
        </div>
      </div>
      <div className="pro-r col-span-2 justify-self-end" ref={proR}></div>
    </div>
  )
}

export default SinglePro 