import React from "react";

function Projects() {
  return (
    <div style={{ backgroundColor: "#D999B9" }}>
      <div className="projects-container animated animatedFadeInUp fadeInUp">
        <div></div>
        <div className="project-center">
          <h1>Podkeeper</h1>

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

            <iframe
              src="https://www.loom.com/embed/b64be6fd6696442a8bb0fb37265fcfe8"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              style={{ width: "100%", height: "400px" }}
            ></iframe>

            <a href="http://www.podkeeper.live">
              <button className="project-button">
                &nbsp;&nbsp;Visit&nbsp;&nbsp;
              </button>
            </a>

            <a href="https://github.com/smh1988-2/podkeeper-fe">
              <button className="project-button">
                &nbsp;&nbsp;Frontend GitHub&nbsp;&nbsp;
              </button>
            </a>

            <a href="https://github.com/smh1988-2/podkeeper-be">
              <button className="project-button">
                &nbsp;&nbsp;Backend GitHub&nbsp;&nbsp;
              </button>
            </a>
          </div>
        </div>

        <div></div>
      </div>

      <div className="projects-container animated animatedFadeInUp fadeInUp">
        <div></div>
        <div className="project-center">
          <h1>Team Builder v2</h1>

          <div>
            <p>
              This is an updated version of my{" "}
              <a href="https://github.com/smh1988-2/pokemon-party-builder">
                very first coding project
              </a>
              . The original was built with vanilla JavaScript, HTML, CSS, and
              Bootstrap. It had a local backend using json-server.
            </p>

            <p>Users can search for Pokemon, see their types, and add Pokemon to their team. They can also see the specific strengths and weakness of the Pokemon on their team.</p>

            <p>
              This version uses a React frontend, with Redux for state
              management. It is styled with Bootstrap and customized with
              SCSS/SASS. It is deployed on AWS.
            </p>

            <ul>
              <li>Frontend: React, Redux, Bootstrap, SCSS/SASS</li>
            </ul>

            <a href="https://main.d1z18mlmzmzyr7.amplifyapp.com/">
              <button className="project-button">Visit</button>
            </a>

            <a href="https://github.com/smh1988-2/poke-team-builder-react-redux">
              <button className="project-button">GitHub</button>
            </a>
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
              We used React and Ruby on Rails to create a cocktail
              recommendation web app. Users can login and add their ingredients
              to see what cocktails they can currently make. They can view the
              full list of cocktails, see what ingredients they need and add
              ratings.
            </p>
            <ul>
              <li>Frontend: React, React Router, Boostrap</li>
              <li>Backend: Ruby on Rails, jwt, bcrypt</li>
            </ul>

            <a href="https://github.com/sokkhengg/phase-4-project/">
              <button className="project-button">GitHub</button>
            </a>

          
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
