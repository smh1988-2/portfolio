import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Menu() {

    let id  = useLocation();
    console.log(id);

  function showHideTopNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div>
      <div className="topnav" id="myTopnav">
      <Link to="/about">
          { id.pathname === "/about" ? <a className="menu-button" style={{backgroundColor:"#dacc3e"}}>Sean Hurley</a> : <a className="menu-button">Sean Hurley</a>}
      </Link>

        <Link to="/projects">
        { id.pathname === "/projects" ? <a className="menu-button" style={{backgroundColor:"#d999b9"}}>Projects</a> : <a className="menu-button">Projects</a>}
        </Link>
        <Link to="/resume">
        { id.pathname === "/resume" ? <a className="menu-button" style={{backgroundColor:"#08605f"}}>Resume</a> : <a className="menu-button">Resume</a>}
        </Link>
        <Link to="/blog">
        { id.pathname === "/blog" ? <a className="menu-button" style={{backgroundColor:"#dacc3e"}}>Blog</a> : <a className="menu-button">Blog</a>}
        </Link>

        <a
          href="javascript:void(0);"
          className="icon"
          onClick={() => showHideTopNav()}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>

      {/* <div>
        <Link to="/about">
          <a className="menu-button">About me</a>
        </Link>
        <Link to="/projects">
          <p className="menu-button">Projects</p>
        </Link>
        <Link to="/resume">
          <p className="menu-button">Resume</p>
        </Link>
        <Link to="/blog">
          <p className="menu-button">Blog posts</p>
        </Link>
      </div> */}
    </div>
  );
}

export default Menu;
