import { useRef } from "react";
import { useTitleAnimation } from '../hooks/Gsap'

const SectionTitle = ({title}) => {
  const titleRef = useRef(null)
  useTitleAnimation(titleRef)
  return (
    <div className="overflow-hidden">
      <h2 className="section-title" ref={titleRef}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
