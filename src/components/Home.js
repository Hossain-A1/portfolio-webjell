import About from "./About";
import Bio from "./Bio";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Bio/>
      <Project/>
      <Skills/>
      <About/>
      <Contact/>

    </div>
  )
}

export default Home