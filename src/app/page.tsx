import Image from "next/image";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Project";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
