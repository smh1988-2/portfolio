import React from "react";

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

function Skills() {
  return (
    <div className="full-height about">
      <div className="about-text">
        <h1 id="about-header">This is what I use to make stuff.</h1>

        <div id="about-icons">
          <DiJavascript1 className="tech-icon" />
          <DiReact className="tech-icon" />
          <DiRuby className="tech-icon" />
          <SiRubyonrails className="tech-icon" />
          <br />
          <DiHtml5 className="tech-icon" />
          <DiCss3 className="tech-icon" />
          <DiGitBranch className="tech-icon" />
          <DiPostgresql className="tech-icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
