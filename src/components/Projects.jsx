const Projects = () => (
  <div id="projects">
    <h1 className="main-title">
      RECENT<br />
      <span className="second-text">PROJECTS</span>
    </h1>
    <div id="projectcards">
      <div className="project-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png" alt="Revo" className="project-img" />
        <div className="project-details">
          <div className="project-name">Portfolio</div>
          <div className="project-desc">Using React Props & Component</div>
        </div>
        <button className="project-link">&#8599;</button>
      </div>
      <div className="project-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkXY134d1HBWfHehz4Vhxuhmj34I8vVaD2w&s" alt="NajmAI" className="project-img" />
        <div className="project-details">
          <div className="project-name">SpaceX Clone</div>
          <div className="project-desc">Using React Props & Component</div>
        </div>
        <button className="project-link">&#8599;</button>
      </div>
      <div className="project-card">
        <img src="https://i.pinimg.com/564x/6a/44/ce/6a44cea6dcfbac279b4a062d8289dd8c.jpg" alt="Nashra" className="project-img" />
        <div className="project-details">
          <div className="project-name">Swiggy Clone</div>
          <div className="project-desc">Using React Props & Component</div>
        </div>
        <button className="project-link">&#8599;</button>
      </div>
    </div>
  </div>
);

export default Projects;
