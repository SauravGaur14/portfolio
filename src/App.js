import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  const scrollToSection = (sectionRef, path) => {
    const offsetPosition = sectionRef.current.offsetTop - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    window.history.pushState(null, "", path);
  };

  return (
    <div className="">
      <div className="h-24">
        <Header
          onHomeClick={() => scrollToSection(homeRef, "/home")}
          onAboutClick={() => scrollToSection(aboutRef, "/about")}
          onProjectsClick={() => scrollToSection(projectsRef, "/projects")}
          onContactClick={() => scrollToSection(contactRef, "/contact")}
        />
      </div>

      <section id="home border-b" ref={homeRef}>
        <Home />
      </section>

      <section id="about" ref={aboutRef}>
        <About />
      </section>

      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
