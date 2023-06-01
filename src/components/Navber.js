import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinksAnimation} from '../hooks/Gsap'

const Navber = ({ footer }) => {

  const linkRef1 = useRef(null)
  const linkRef2 = useRef(null)
  const linkRef3 = useRef(null)
  const linkRef4 = useRef(null)
  const linkRef5 = useRef(null)
  const linkRef6 = useRef(null)
  const linkRef7 = useRef(null)

  const linksArr = [linkRef1,linkRef2,linkRef3,linkRef4, linkRef5,linkRef6,linkRef7]

  useLinksAnimation(linksArr ,2)

  return (
    <nav
      className={`flex justify-between container lg:h-[10vw]  mx-auto ${
        footer ? "mt-20" : "mt-10"
      } uppercase  `}
    >
      <div>
        <HashLink smooth to="#home" className="link-item" ref={linkRef1}>
          {footer ? "Go to top" : "Mohammed Hossain"}
        </HashLink>
      </div>
      <ul className="flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link-item" ref={linkRef2}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#project" className="link-item" ref={linkRef3}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item" ref={linkRef4}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item" ref={linkRef5}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item" ref={linkRef6}>
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            className="link-item"
          ref={linkRef7}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
