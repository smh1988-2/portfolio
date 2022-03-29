import About from "./components/About";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Links />
    </div>
  );
}

export default App;
