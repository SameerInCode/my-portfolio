import { FaFacebook,FaGithub,FaLinkedin,FaWhatsapp,FaPhoneAlt } from "react-icons/fa";

function Hero(){
  return(
    <section id="hero">
      <div className="hero-content">
       
        <h1 className="hero-name">Muhammad Sameer Khalid!</h1>
        <p className="hero-subtitle">BS Computer Science Student | MERN Stack Developer | Machine Learning Enthusiast</p>
        <div className="hero-avatar-wrapper">
          <img src="./sk.jpg" alt="no image found" />
        </div>

        <div className="hero-buttons">
          <a href="/sameer-cv.pdf" className="btn-download" >Download CV</a>
          <a href="#projects" className="btn-projects">View Projects</a>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/m-sameer-sk-144936307/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin/>
          </a>

          <a
            href="https://github.com/SameerInCode"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub/>
          </a>

          <a
            href="https://wa.me/923073360721"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp/>
          </a>

          <a
            href="https://www.facebook.com/share/1E6NtDiG3A/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook/>
          </a>

          <a href="tel:+923073360721">
            <FaPhoneAlt/>
          </a>
        </div>

        <div className="hero-scroll-indicator">
          <span className="scroll-dot"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
