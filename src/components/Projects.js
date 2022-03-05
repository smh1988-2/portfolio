import React from "react";

function Projects() {
  return (
    <div style={{ backgroundColor: "#D999B9" }}>
      <div className="projects-container animated animatedFadeInUp fadeInUp">
        <div></div>
        <div className="project-center">
          <h1>Podkeeper</h1>

          <iframe
            width="400px"
            height="300px"
            src="https://www.youtube-nocookie.com/embed/lVnRVFmr4a8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div>
            <p>
              A social podcast app. Users can find podcasts and listen to
              episodes. They can rate podcasts and episodes. You can search and
              follow other users and see their podcast activity. The app also
              tracks podcast listening metrics.
            </p>
            <ul>
              <li>Frontend: React, React Router, Boostrap</li>
              <li>Backend: Ruby on Rails, jwt, bcrypt</li>
            </ul>

            <ul className="project-links">
              <li>
                <a href="http://www.podkeeper.live">Visit</a>
              </li>
              <li>
                <a href="https://github.com/smh1988-2/podkeeper-fe">
                  Frontend GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/smh1988-2/podkeeper-be">
                  Backend GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div></div>
      </div>

      <div className="projects-container animated animatedFadeInUp fadeInUp">
        <div></div>
        <div className="project-center">
          <h1>Cocktailor</h1>
          <div>
            <p>
            We used React and Ruby on Rails to create a cocktail recommendation web app. Users can login and add their ingredients to see what cocktails they can currently make. They can view the full list of cocktails, see what ingredients they need and add ratings.
            </p>
            <ul>
              <li>Frontend: React, React Router, Boostrap</li>
              <li>Backend: Ruby on Rails, jwt, bcrypt</li>
            </ul>

            <ul className="project-links">
              <li>
                <a href="https://github.com/sokkhengg/phase-4-project">
                  GitHub
                </a>
              </li>
        
            </ul>
            <br />
            <br />
            <br />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Projects;
