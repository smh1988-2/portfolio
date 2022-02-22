import React from "react";
import PodkeeperScreenshot from "./podkeeper-screenshot.png";

function Projects() {
  return (

    <div style={{backgroundColor:"#D999B9"}}>
    <div className="projects-container animated animatedFadeInUp fadeInUp">
      <div></div>
      <div className="project-center">
        <h1>Podkeeper</h1>

        <img
          src={PodkeeperScreenshot}
          alt="Podkeeper screenshot"
          className="project-center-image"
        />

        <div>
          <p>
            A social podcast app. Users can find podcasts and listen to
            episodes. They can rate podcasts and episodes. You can search and
            follow other users and see their podcast activity. The app also
            tracks podcast listening metrics.
          </p>
          <ul>
            <li>Frontend: React, Reat Router, Boostrap</li>
            <li>Backend: Ruby on Rails, jwt, bcrypt</li>
          </ul>

          <ul className="project-links">
            <li>
              <a href="http://www.podkeeper.live">Visit</a>
            </li>
            <li>
              <a href="https://github.com/smh1988-2/podkeeper-fe">Frontend GitHub</a>
            </li>
            <li>
              <a href="https://github.com/smh1988-2/podkeeper-be">Backend GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
    </div>
  );
}

export default Projects;
