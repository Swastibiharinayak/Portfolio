import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Tools from "./Tools";

const Hero = () => {
  return (
    <div id="hero">
      <div id="left">
        <div id="imgsec">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_boqKWQIo2HA3-Ce5F8kyjdtErbPODJT9EWbPpPvPew&s" alt="Display Picture" />
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
