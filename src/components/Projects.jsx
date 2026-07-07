import React, { useState } from "react";


function Projects() {
  const projects = [
    {
      id: 1,
      title: "Student Engagement Detetction AI System",
      category: "Machine Learning",
      desc: "Developed a real-time student engagement monitoring system using face and eye recognition. Trained and evaluated models on a Kaggle student engagement dataset and integrated live webcam-based detection for engagement analysis.",
      img: "./ml-project.png",
      github: "https://github.com/SameerInCode/ML-Project.git",
      live: "#",
      tech: ["Python","OpenCV","Flask","Pyngrok","Computer Vision","Face Detection","Eye Tracking"],
      featured: true,
    },
    {
      id: 2,
      title: "Authentication System",
      category: "Backend",
      desc: "A basic authentication system built with Node.js, MongoDB, HTML, and CSS. This project includes user signup, login, and authentication flow for learning backend development fundamentals.",
      img: "./Authentication_System.PNG",
      github: "https://github.com/SameerInCode/Authentication-System",
      live: "#",
      tech: ["Node.js","MongoDB","HTML","CSS"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend",
      desc: "Personal portfolio built with React and CSS.",
      img: "./Potfolio.PNG",
      github: "https://github.com/SameerInCode/my-portfolio",
      live: "https://sameer-portfolio-psi.vercel.app/",
      tech: ["React","Vercel","JavaScript","CSS"]
    },
    {
      id: 4,
      title: "University Management System",
      category: "OOP",
      desc: "C++ project implementing university management using OOP concepts.",
      img: "./a2.PNG",
      github: "https://github.com/SameerInCode/University-Management-System",
      live: "#",
      tech: ["C++","OOP","File Handling","Data Structures"]
    },
    {
      id: 5,
      title: "Amazon Frontend Clone",
      category: "Frontend",
      desc: "Amazon clone UI using HTML, CSS, and JavaScript.",
      img: "./CloneAmazon.PNG",
      github: "https://github.com/SameerInCode/amazon-clone",
      live: "#",
      tech: ["HTML","JavaScript","CSS"]
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
          <div key={p.id} className={`project-card fade-in ${p.featured ? "featured-project":""}`}>
            <img src={p.img} alt={p.title} className="project-img" />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech-stack">
                {p.tech.map((tech)=>(
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              {p.live !=="#" &&(
                <a href={p.live} target="blank">LiveDemo</a>
              )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
