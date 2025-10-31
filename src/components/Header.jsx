import ThemeToggle from "./toogleTheme";
function Header(){
  return(
    <nav>
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="#experience">Experience</a>
      <ThemeToggle/>
    </nav>
  );
}

export default Header;