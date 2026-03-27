import { FaFacebook,FaGithub,FaLinkedin,FaWhatsapp,FaPhoneAlt } from "react-icons/fa";

function Hero(){
  return(
    <section id="hero">
      
      <h1>I am Sameer Khalid!</h1>
      <p>Web Developer | MERN Developer | Designer </p>
      <img src="./sk.jpg" alt="no image found" />

      <div className="hero-buttons">
        <a href="/sameer-cv.pdf" className="btn-download" >Download Cv</a>
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
    </section>
  );
}

export default Hero;
