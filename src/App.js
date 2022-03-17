import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Sean from "./components/Sean";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Sean />
      {/* <Menu />
      <Routes>
      <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes> */}

    </div>
  );
}

export default App;
