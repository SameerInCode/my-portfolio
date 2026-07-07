function About (){
  return(
    <section id="about">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm a <strong>BS Computer Science</strong> student at Lahore Garrison University (Semester 6), passionate about building real-world software. I specialize in the <strong>MERN stack</strong> and have hands-on experience with machine learning, distributed systems, and cloud computing.</p>
          <p style={{marginTop: '1rem'}}>Currently building <strong>FurniMart</strong> — a multi-vendor furniture marketplace for the Pakistani market. I'm actively seeking <strong>web development or AI/ML internship opportunities</strong>.</p>
        </div>
        <div className="about-stats">
          <div className="stat-card"><span className="stat-number">6+</span><span className="stat-label">Semester Projects</span></div>
          <div className="stat-card"><span className="stat-number">3+</span><span className="stat-label">Certifications</span></div>
          <div className="stat-card"><span className="stat-number">5+</span><span className="stat-label">Tech Stacks</span></div>
          <div className="stat-card"><span className="stat-number">1</span><span className="stat-label">Active Startup</span></div>
        </div>
      </div>
    </section>
  );
}

export default About;
