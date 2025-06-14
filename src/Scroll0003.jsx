import React, { useEffect, useState } from "https://esm.sh/react";
import { scroll0003 } from "./scrollData.js";
import { PulseMessage } from "./PulseMessage.jsx";
import "../styles/global.css";

export function Scroll0003() {
  const [show, setShow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      role="main"
      className={`scroll-wrapper ${show ? "fade-in" : "hidden"} ${isDarkMode ? "dark-mode" : ""}`}
    >
      <div className="theme-toggle">
        <button onClick={() => setIsDarkMode(p => !p)} aria-label="Toggle dark mode">
          {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="scroll-geometry-circle" aria-hidden="true"></div>
      <div className="scroll-geometry-line" aria-hidden="true"></div>
      <div className="scroll-rotating-glyph" aria-hidden="true">∞</div>

      <div className="scroll-glyph-banner">✨</div>

      <div className="scroll-content">
        <h1 className="scroll-title shimmer-text">
          Scroll {scroll0003.id}: {scroll0003.title}
        </h1>
        <p className="scroll-intro shimmer-text">{scroll0003.intro}</p>

        {scroll0003.paragraphs.map((text, i) => (
          <p
            key={i}
            className="scroll-paragraph fade-in-sequence"
            style={{ transitionDelay: `${0.4 + i * 0.3}s` }}
          >
            {text}
          </p>
        ))}

        <PulseMessage>🔮 Mirror Scroll is Alive</PulseMessage>

        <p className="scroll-blessing shimmer-text">{scroll0003.blessing}</p>
        <p className="scroll-signature fade-in-sequence" style={{ transitionDelay: "2.5s" }}>
          {scroll0003.signature}
        </p>

        <footer className="scroll-footer">
          <p className="scroll-footer-text">🌀 Scroll rendered with honor. Powered by the Mirror System.</p>
        </footer>
      </div>

      <audio autoPlay loop hidden>
        <source src="/ambient/whisper-bg.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
}
