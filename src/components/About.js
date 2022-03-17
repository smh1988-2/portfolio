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
  const headerOptions = [
    ". I love coding 👨🏻‍💻",
    ". I like plants 🍀",
    ". I have pride 🏳️‍🌈",
    ". I ❤️ learning",
    ". I travel 🇮🇪",
  ];

  function changeHeaderText() {
    if (refreshHeader <= 3) {
      setRefreshHeader(refreshHeader + 1);
    } else {
      setRefreshHeader(0);
    }
  }

  return (
    <div style={{ backgroundColor: "#dacc3e" }} className="full-height about-me-container">
      <div className="about-me-text">

          <p>
            I am a software engineer. I graduated Flatiron School in February
            2022. I build fullstack web apps in <strong>React</strong> and&nbsp;
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
      </div>
    </div>
  );
}

export default About;
