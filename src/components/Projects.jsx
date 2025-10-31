import { useState } from "react";


function Projects() {
  const projects = [
    {
      id: 1,
      title: "Authentication System",
      category: "Backend",
      desc: "Node.js + MongoDB + HTML + CSS based authentication system.",
      img: "./Authentication_System.PNG",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Frontend",
      desc: "Personal portfolio built with React and CSS.",
      img: "./Potfolio.PNG",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "University Management System",
      category: "OOP",
      desc: "C++ project implementing university management using OOP concepts.",
      img: "./images/university.jpg",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Amazon Frontend Clone",
      category: "Frontend",
      desc: "Amazon clone UI using HTML, CSS, and JavaScript.",
      img: "./CloneAmazon.PNG",
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Conceptual Game (PF)",
      category: "OOP",
      desc: "A simple C++ game demonstrating programming fundamentals.",
      img: "./images/game.jpg",
      github: "#",
      live: "#",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "OOP"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects 💻</h2>

      {/* Category Filter */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn ${
              activeCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <div key={p.id} className="project-card fade-in">
            <img src={p.img} alt={p.title} className="project-img" />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
