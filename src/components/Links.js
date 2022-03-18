import React from "react";

function Links() {
  return (
    <div className="half-height">
      <div className="links-text">
        <h1>Find me other places.</h1>

            <a href="https://github.com/smh1988-2">
              <button className="link-button">
              &nbsp;&nbsp;GiftHub&nbsp;&nbsp;
              </button>
            </a>
            <a href="https://www.linkedin.com/in/sean-hurley/">
              <button className="link-button">
                LinkedIn
              </button>
            </a>

            <a href="https://medium.com/@seanmhurley1988">
              <button className="link-button">
              &nbsp;&nbsp;Medium&nbsp;&nbsp;
              </button>
            </a>
            <a href="mailto:seanmhurley1988@gmail.com">
              <button className="link-button">
                Contact
              </button>
            </a>
      </div>
    </div>
  );
}

export default Links;
