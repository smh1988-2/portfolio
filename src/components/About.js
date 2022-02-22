import React from "react";

function About() {
  return (

    <div style={{backgroundColor:"#dacc3e"}}>
      <div className="hero-container">
        <div class="animated animatedFadeInUp fadeInUp">
          <h1 className="hero-header-animated">Hello, I'm Sean 👨🏻‍💻</h1>
          <p>
            I am a software engineer. I graduated Flatiron School in February
            2022. I build fullstack web apps in <strong>React</strong> and{" "}
            <strong>Ruby on Rails</strong>.
          </p>
          <p>
            I enjoy solving difficult problems (in teams and solo) and learning
            new tools and technologies.
          </p>
          <p>
            Before my foray into software engineering, I spent 8 years in
            digital marketing.
          </p>
          <p>
            Originally from Ireland, I now live in northern California with my
            husband, two cats, and innumerable plants.
          </p>
          <p>
            Please check out my resume and projects and contact me if you want
            to start a conversation.
          </p>

          <a href="https://github.com/smh1988-2">
          <button className="about-button">GitHub</button>
        </a>
        <a href="https://www.linkedin.com/in/sean-hurley/">
          <button className="about-button">LinkedIn</button>
        </a>
        <a href="mailto:seanmhurley1988@gmail.com">
          <button className="about-button">Contact</button>
        </a>
        </div>
      </div>
      </div>

  );
}

export default About;
