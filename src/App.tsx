import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

export function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
