const About = () => {
  return (
    <div id="about">
      <div className="main-info">
        <h1 className="main-title">
          MERN STACK<br /><span className="second-text">DEVELOPER</span>
        </h1>
        <p className="main-desc">
          A passionate MERN Stack Developer dedicated to creating intuitive, engaging user experiences and transforming ideas into beautifully crafted products.
        </p>
        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-main">50+</span>
            <span className="stat-label">GITHUB COMMITS</span>
          </div>
          <div className="stat-box">
            <span className="stat-main">5+</span>
            <span className="stat-label">PROJECTS COMPLETED</span>
          </div>
          <div className="stat-box">
            <span className="stat-main">3+</span>
            <span className="stat-label">TECHNOLOGIES MASTERED</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;