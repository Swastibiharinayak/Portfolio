const tools = [
  {
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
    name: "MongoDB",
    desc: "NoSQL Database"
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/expressjs.svg", 
    name: "Express.js",
    desc: "Backend Web Framework"
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s", 
    name: "React",
    desc: "Frontend UI Library"
  },
  {
    icon: "https://www.shutterstock.com/image-vector/node-js-framework-web-development-260nw-1740811286.jpg",
    name: "Node.js",
    desc: "Runtime Environment"
  },
  {
    icon: "https://as2.ftcdn.net/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg",
    name: "Git",
    desc: "Version Control"
  },
  {
    icon: "https://cdn.dribbble.com/userupload/33362931/file/original-544046b67edc7c0dc891daaca7619a83.png?resize=400x300",
    name: "VS Code",
    desc: "Code Editor"
  }
];

const Tools = () => (
  <div id="tools-sec">
    <h1 className="tools-title">
      PREMIUM<br />
      <span className="tools-grey">TOOLS</span>
    </h1>
    <div className="tools-grid">
      {tools.map((tool, idx) => (
        <div className="tool-row" key={idx}>
          <img src={tool.icon} alt={tool.name} className="tool-icon" />
          <div>
            <span className="tool-name">{tool.name}</span>
            <div className="tool-desc">{tool.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Tools;
