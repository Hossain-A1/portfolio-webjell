import { HashLink } from "react-router-hash-link";
const Navber = () => {
  return (
    <nav className="flex justify-between container  mx-auto uppercase mt-10">
      <div>
        <HashLink smooth to="#home" className="link-item">
          Mohamad Hossain
        </HashLink>
      </div>
      <ul className="flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#project" className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
