import { useEffect } from "react";
import ThemeToggle from "./toogleTheme";
function Header(){
  useEffect(() => {
    const nav = document.querySelector("nav");

    const handleScroll = () => {
      if (!nav) return;
      nav.classList.toggle("nav-scrolled", window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <nav>
      <span className="nav-brand">SK</span>
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="#experience">Experience</a>
      <a href="#certifications">Certifications</a>
      <ThemeToggle/>
    </nav>
  );
}

export default Header;
