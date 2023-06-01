import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useSkillLineAnimation, useSkillTextAnimation } from "../hooks/Gsap";

const data = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "bootstrap" },
  { id: 4, title: "Tailwind Css" },
  { id: 5, title: "Javascript" },
  { id: 6, title: "React.js" },
  { id: 7, title: "Redux.js" },
  { id: 8, title: "React Router" },
  { id: 9, title: "Redux Toolkit" },
  { id: 10, title: "Axios" },
  { id: 11, title: "GSAP" },
  { id: 12, title: "Firebase" },
];
const Skills = () => {
  const skilltemRef = useRef([]);
  const skillItemRef2 = useRef([]);
  const skillTextRef = useRef([]);
  const skillTextRef2 = useRef([]);

  useSkillLineAnimation(skilltemRef.current);
  useSkillLineAnimation(skillItemRef2.current);
  useSkillTextAnimation(skillTextRef.current);
  useSkillTextAnimation(skillTextRef2.current);

  return (
    <div className="skills container mx-auto mt-32 " id="skills">
      <SectionTitle title={"skills"} />
      <div className="skills-wrapper grid grid-cols-2 gap-10 mt-32">
        <ul className="skill-L flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skilltemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-num text-gray-50/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skill-R flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item reveal overflow-hidden"
                ref={(el) => (skillItemRef2.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef2.current[i] = el)}
                >
                  <span className="skill-num text-gray-50/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
