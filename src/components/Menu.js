import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Menu() {
  let id = useLocation();

  return (
    <div style={{ backgroundColor: "#7fb7be" }}>
      <div className="topnav" id="myTopnav">
        <Link to="/about">
          {id.pathname === "/about" ? (
            <span id="about-link" style={{ backgroundColor: "#dacc3e" }}>Sean Hurley</span>
          ) : (
            <span id="about-link">Sean Hurley</span>
          )}
        </Link>

        <Link to="/projects">
          {id.pathname === "/projects" ? (
            <span
            id="projects-link"
              style={{ backgroundColor: "#d999b9" }}
            >
              Projects
            </span>
          ) : (
            <span id="projects-link">Projects</span>
          )}
        </Link>
        <Link to="/resume">
          {id.pathname === "/resume" ? (
            <span id="resume-link"
              style={{ backgroundColor: "#08605f" }}
            >
              Resume
            </span>
          ) : (
            <span id="resume-link">Resume</span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Menu;
