import React, { useState } from "react";


function Resume() {



  let [text, setText] = useState(0);

  const resumeText = [
    "I graduated from University College Cork with a degree in English and Chinese Studies in 2010.",
    "I started working in digital marketing in 2012.",
    "I learned email marketing, digital advertisting, and analytics at Magikid.",
    "I increased email engagement at AltSchool.",
    "I drove down accquisition costs at Triplemint.",
    "I led the website redesign at Amplifty.",
    "I made email marketing the highest revenue generating channel at Segal.",
    "I graduated Flatiron School's Software Engineering Course in 2022.",
    "I made this website.",
    "I took a nap.",
  ];

  function handleResumeTextForward() {
    if (text < resumeText.length - 1) {
      setText((text = text + 1));
    } else setText(0);
  }

  function handleResumeTextBack() {
    if (text > 0) {
      setText((text = text - 1));
    } else {
      setText(resumeText.length - 1);
    }
  }

  return (
    
    <div className="full-height resume">
      
      <div className="resume-text">
        <h1>Resume.</h1>

        <div>
          <button className="resume-summary-button" onClick={handleResumeTextBack}>&larr;</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="resume-summary-button" onClick={handleResumeTextForward}>&rarr;</button>
        </div>
<br />
        <p className="resume-bullet-point">{resumeText[text]}</p>

        <div className="resume-button-container">
          <a href="/sean-hurley-resume.pdf">
            <button className="resume-button">Download Full Resume</button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Resume;
