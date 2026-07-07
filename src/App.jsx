import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Certificates from "./components/Certifications";
import ThemeToggle from "./components/toogleTheme";
import "./App.css";


function App(){
  return(
    <>
    <Header />
    <Hero />
    <About />
    <Skills/>
    <Projects />
    <Experience/>
    <Certificates/>
    <Contact />
    <Footer />
    </>
  );

}

export default App;