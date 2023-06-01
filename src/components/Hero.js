import { useRef } from "react";
import { UseHoverEfff } from "../hooks/UseHoverEfff";
import { useImageAnimation } from "../hooks/Gsap";
import { useGsapHeadline } from "../hooks/Gsap";
const data = {
  img1: "https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683393535/84840829_594183601511811_3387241313525914341_n_taewf6.jpg",
  img2: "https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683393542/108385018_599511930978978_5424253900150383492_n_ljrz1a.jpg",
};

const Hero = () => {
  const heroImgRef = useRef(null);
  const heroHeadlineRef1 = useRef(null);
  const heroHeadlineRef2 = useRef(null);

  UseHoverEfff(heroImgRef, data.img1, data.img2);
  const headlineArr = [heroHeadlineRef1, heroHeadlineRef2];

  useImageAnimation(heroImgRef , 0.5);
  useGsapHeadline(headlineArr, 1.5);
  return (
    <div className="hero container mx-auto mt-10 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="" ref={heroHeadlineRef1}>
          ReactJS
        </h1>
      </div>
      <div className=" shutter shutter-right overflow-hidden">
        <h1 className="" ref={heroHeadlineRef2}>
          Developer
        </h1>
      </div>
      <div className="circel-left"></div>
      <div className="circel-right"></div>
    </div>
  );
};

export default Hero;
