import React, { useState } from "react";

import {
  DiJavascript1,
  DiReact,
  DiRuby,
  DiHtml5,
  DiCss3,
  DiGitBranch,
  DiPostgresql,
} from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { HiRefresh } from "react-icons/hi";

function About() {
  const [refreshHeader, setRefreshHeader] = useState(0);
  const headerOptions = [". I love coding 👨🏻‍💻", ". I like plants 🍀", ". I have pride 🏳️‍🌈", ". I ❤️ learning", ". I travel 🇮🇪"];

  function changeHeaderText() {
    if (refreshHeader <= 3) {
      setRefreshHeader(refreshHeader + 1);
    } else {
      setRefreshHeader(0);
    }
  }

  return (
    <div style={{ backgroundColor: "#dacc3e" }}>
      <div className="hero-container">
        <div className="animated animatedFadeInUp fadeInUp">
          <h1 className="hero-header-animated">
            Hello, I'm Sean
            {headerOptions[refreshHeader]}&nbsp;&nbsp;&nbsp;
            
          </h1>
<br />
          <span style={{ color: "#fff", fontSize:"40px" }}>
              <HiRefresh onClick={changeHeaderText} />
            </span>

          <p>
            I am a software engineer. I graduated Flatiron School in February
            2022. I build fullstack web apps in <strong>React</strong> and{" "}
            <strong>Ruby on Rails</strong> (and bunch of other stuff).
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

          <div className="row">
            <div className="column">
              <span className="tech-icon">
                <DiJavascript1 />
              </span>
            </div>
            <div className="column">
              <span className="tech-icon">
                <DiReact />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <span className="tech-icon">
                <DiRuby />
              </span>
            </div>
            <div className="column">
              <span className="tech-icon">
                <SiRubyonrails />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <span className="tech-icon">
                <DiHtml5 />
              </span>
            </div>
            <div className="column">
              <span className="tech-icon">
                <DiCss3 />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <span className="tech-icon">
                <DiGitBranch />
              </span>
            </div>
            <div className="column">
              <span className="tech-icon">
                <DiPostgresql />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <a href="https://github.com/smh1988-2">
                <button className="about-button">
                  &nbsp;&nbsp;GitHub&nbsp;&nbsp;
                </button>
              </a>
              <a href="https://www.linkedin.com/in/sean-hurley/">
                <button className="about-button">
                  &nbsp;&nbsp;LinkedIn&nbsp;&nbsp;
                </button>
              </a>
            </div>

            <div className="column">
              <a href="https://medium.com/@seanmhurley1988">
                <button className="about-button">
                  &nbsp;&nbsp;Medium&nbsp;&nbsp;
                </button>
              </a>
              <a href="mailto:seanmhurley1988@gmail.com">
                <button className="about-button">
                  &nbsp;&nbsp;Contact&nbsp;&nbsp;
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
