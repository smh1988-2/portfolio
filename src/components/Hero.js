import React, { useState } from "react";

import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

function Hero() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const [playing, setPlaying] = useState(true);

  const heroText = [
    "Hi, my name is Sean 👋",
    "I like coding 👨🏻‍💻",
    "I grow plants 🪴",
    "I take care of cats 🐈",
    "I travel 🇮🇪 🇨🇳 🇺🇸",
    "I keep learning 📚",
  ];

  return (
    <div className="full-height hero">

<div className="logo">
        <p>Sean</p>
      </div>


      <div className="hero-text">
        <h1>
          {playing ? (
            <Typewriter
              options={{
                strings: heroText,
                autoStart: true,
                loop: true,
                stringSplitter,
              }}
            />
          ) : (
            "Hi, my name is Sean 👋"
          )}
        </h1>
        <div className="about-button-position">
      <a href="#about"><button id="about-button">About Me</button></a>
      </div>
      </div>

      <div className="pause-button">
        <p onClick={() => setPlaying(!playing)}>{playing ? "stop" : "start"}</p>
      </div>

      

    </div>
  );
}

export default Hero;
