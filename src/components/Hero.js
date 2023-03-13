import { useRef } from "react";
import { UseHoverEfff } from "../hooks/UseHoverEfff";

const data = {
  img1: 'https://images.pexels.com/photos/8172091/pexels-photo-8172091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  img2: 'https://images.pexels.com/photos/2364514/pexels-photo-2364514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}

const Hero = () => {
  const heroImgRef  = useRef(null)

  UseHoverEfff(heroImgRef,data.img1, data.img2)
  return (
    <div className="hero container mx-auto mt-10 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="">ReactJS</h1>
      </div>
      <div className=" shutter shutter-right overflow-hidden">
        <h1 className="">Dedeloper</h1>
      </div>
      <div className="circel-left"></div>
      <div className="circel-right"></div>
    </div>
  )
}

export default Hero