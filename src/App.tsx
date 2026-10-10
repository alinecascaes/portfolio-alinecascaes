import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Footer />
    </>
  );
}
