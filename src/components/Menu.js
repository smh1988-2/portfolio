import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Menu() {

    let id  = useLocation();

//   function showHideTopNav() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

  return (
    <div>
      <div className="topnav" id="myTopnav">
      <Link to="/about">
          { id.pathname === "/about" ? <span style={{backgroundColor:"#dacc3e"}}>Sean Hurley</span> : <span className="menu-button">Sean Hurley</span>}
      </Link>

        <Link to="/projects">
        { id.pathname === "/projects" ? <span className="menu-button" style={{backgroundColor:"#d999b9"}}>Projects</span> : <span className="menu-button">Projects</span>}
        </Link>
        <Link to="/resume">
        { id.pathname === "/resume" ? <span className="menu-button" style={{backgroundColor:"#08605f"}}>Resume</span> : <span className="menu-button">Resume</span>}
        </Link>
  

        {/* <span
          href="javascript:void(0);"
          className="icon"
          onClick={() => showHideTopNav()}
        >
          <i className="fa fa-bars"></i>
        </span> */}
      </div>
    </div>
  );
}

export default Menu;
