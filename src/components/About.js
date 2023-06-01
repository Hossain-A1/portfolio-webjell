import { useRef } from "react";
import { UseHoverEfff } from "../hooks/UseHoverEfff";
import SectionTitle from "./SectionTitle";
import { useAboutAnimation } from "../hooks/Gsap";

const data = {
  img1: "https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683395061/279704961_1043265389936961_800370488193347031_n_azahcn.jpg",
  img2: "https://res.cloudinary.com/dyaj1dlzu/image/upload/v1683394899/39869305_139353973661445_7170507605012381696_n_vdtkvp.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutLeftRightArr = [aboutLeftRef, aboutRightRef];

  useAboutAnimation(aboutLeftRightArr);

  UseHoverEfff(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="container mx-auto mt-32" id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-32 grid grid-cols-2 gap-10 overflow-hidden">
        <div className="about-L" ref={aboutLeftRef}></div>
        <div className="about-R " ref={aboutRightRef}>
          <p className="text-lg">
            Peace be upon you I'm Hossain Ahmed. At present, I'm working as a
            React js developer. 2 years of working experience in developing
            websites and web applications. Proficient in translating designs &
            wireframes into high-quality code, and writing application interface
            code via Javascript and ReactJS workflows. In my previous role at
            Crunchtime, I was responsible for developing and managing React
            applications. I have also worked extensively with Redux and React
            Router. I am confident that I can take on any challenge that comes
            my way and I am always looking for ways to improve my skills.
          </p>
          <p className="mt-5 text-lg">
            I am a motivated, hardworking individual who always seeks new
            challenges. I am confident that I can be a valuable asset to any
            team and I am excited to learn more about the React Developer
            position. My dream is to become a full-stack developer. Thank you for
            reading me...
          </p>
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noreferrer"
            className="uppercase inline-block mt-5 py-4 px-8 border border-gray-400 rounded-full hover:text-teal-400 duration-300  "
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
