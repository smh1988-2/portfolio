import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import BlogHome from "./components/BlogHome";
import Resume from "./components/Resume";
import About from "./components/About";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
 

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<BlogHome />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;