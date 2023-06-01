import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import {useFooterAnimation} from '../hooks/Gsap'

const Footer = () => {
  const footerRef = useRef(null)
  useFooterAnimation(footerRef)
  return (
    <footer
      className="my-20 text-center
    text-gray-50/60 overflow-hidden "
    >
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink smooth to="#home" className="link-item hover:text-white duration-300">
          MD.Hossain
        </HashLink>
        . Created by your truly
      </p>
    </footer>
  );
};

export default Footer;
