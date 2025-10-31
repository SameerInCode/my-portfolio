import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import ThemeToggle from "./components/toogleTheme";
import "./App.css";
import Experience from "./components/Experience";

function App(){
  return(
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Experience/>
    <Contact />
    <Footer />
    </>
  );

}

export default App;