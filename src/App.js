import About from "./components/About";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Links />
      <Resume />
    </div>
  );
}

export default App;
