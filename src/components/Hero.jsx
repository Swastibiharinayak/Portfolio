import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Tools from "./Tools";

const Hero = () => {
  return (
    <div id="hero">
      <div id="left">
        <div id="imgsec">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHiIIBWytHAlA/profile-displayphoto-crop_800_800/B4DaDb298BLAAI-/0/1790395016825?e=1796256000&v=beta&t=7rxcix6f9qD_USjWhgrhOrusuCPmn_Fy_CrIs5pl_14" alt="Display Picture" />
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
