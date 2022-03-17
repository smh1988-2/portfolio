import React from "react";

function Links() {
  return (
    <div className="half-height">
      <div>
        <h1>Find me other places.</h1>
        <div className="row">
          <div className="column">
            <a href="https://github.com/smh1988-2">
              <button className="link-button">
                GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/sean-hurley/">
              <button className="link-button">
                LinkedIn
              </button>
            </a>
          </div>

          <div className="column">
            <a href="https://medium.com/@seanmhurley1988">
              <button className="link-button">
                Medium
              </button>
            </a>
            <a href="mailto:seanmhurley1988@gmail.com">
              <button className="link-button">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
