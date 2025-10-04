import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Tools from "./Tools";

const Hero = () => {
  return (
    <div id="hero">
      <div id="left">
        <div id="imgsec">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFYP-ZzbUNtPQ/profile-displayphoto-shrink_400_400/B56ZZ6T26UHAAg-/0/1745808749624?e=1762387200&v=beta&t=7NxeMisjURnzqiKysaBFLk_OMeVUYc4PdSz_HekEW7E" alt="Display Picture" />
          <h1>Swasti Bihari Nayak</h1>
        </div>
        <p>A MERN Stack Developer passionate about building scalable, user-friendly web applications.</p>
      </div>
      <div id="right">
        <About/>
        <Projects/>
        <Tools/>
        <Contact/>
      </div>
    </div>
  )
}

export default Hero;