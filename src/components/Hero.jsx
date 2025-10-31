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
      <a href="" target="_blank" rel="">
        <FaLinkedin/>
      </a>

      <a href="" target="_blank" rel="">
        <FaGithub/>
      </a>

      <a href="" target="_blank" rel="">
        <FaWhatsapp/>
      </a>

      <a href="" target="_blank" rel="">
        <FaFacebook/>
      </a>

      <a href="" target="_blank" rel="">
        <FaPhoneAlt/>
      </a>
      </div> 
    </section>
  );
}

export default Hero;