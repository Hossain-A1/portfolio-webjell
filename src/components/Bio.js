import { useRef } from "react";
import { useBioAnimation} from '../hooks/Gsap'

const Bio = () => {

  const bioRef = useRef(null)
  useBioAnimation(bioRef,2)
  return (
    <div className="bio bt-10 container mx-auto overflow-hidden " >
      <p ref={bioRef}> I'm Hossain Ahmed. At present, I'm working as a React js developer. 
Front-End developer with 2 years of experience building and maintaining different web applications.</p>
    </div>
  );
};

export default Bio;
