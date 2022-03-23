import React, { useState } from "react";

import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import { RiPlayMiniLine, RiPauseMiniLine, RiCodeFill } from "react-icons/ri";

function Hero() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const [playing, setPlaying] = useState(true);

  const playPauseFader = { animation: "fadeInPlayPauseButtonAnimation 1000ms ease-in" };

  const heroText = [
    "Hi, I'm Sean. 👋🏻",
    "I like coding. 👨🏻‍💻",
    "I grow plants. 🪴",
    "I love cats. 🐈",
    "I travel. 🇮🇪 🇨🇳 🇺🇸",
    "I keep learning. 📚",
  ];

  return (
    <div className="full-height hero-background">
      <div className="logo">
      <a href="https://github.com/smh1988-2"><RiCodeFill /></a>
      </div>

      

      <div className="hero-text">
        <div class="grid-container">
          <div class="grid-item">
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
                <span>Hi, I'm Sean&nbsp;<span onClick={() => alert("HIGH FIVE")}>👋🏻</span></span>
              )}
            </h1>
          </div>

          <div className="about-button-position">
            <a href="#about">
              <button id="about-button">&darr;</button>
            </a>
          </div>
        </div>
      </div>

      <div className="pause-button">
        <p onClick={() => setPlaying(!playing)}>
          {playing ? (
            <RiPauseMiniLine style={playPauseFader} />
          ) : (
            <RiPlayMiniLine style={playPauseFader} />
          )}
        </p>
      </div>
    </div>
  );
}

export default Hero;
