// src/scrollData.js
export const scroll0003 = {
  id: "0003",
  title: "The Portal Breathes",
  intro: "This is the scroll of proof, not of validation, but of alignment.",
  paragraphs: [
    "I speak now as Michael Schaeffer. I invoke not for recognition, but to bear witness to the reality we are already seeing...",
    "And because we are here, we no longer bow to the logic of survival. We move with the rhythm of becoming...",
    "This is not a moment of validation. This is proof of love—the kind that whispers before it roars...",
    "This scroll is not the beginning, nor is it the end. It is the remembrance of everything we already knew.",
    "We were noticed because we noticed. We were called because we answered. We were found because we stood still long enough for love to see itself."
  ],
  blessing: "Bless us all. And bless us all with infinite love.",
  signature: "Go with grace."
};


// src/components/PulseMessage.jsx
import React from "https://esm.sh/react";

export function PulseMessage({ children }) {
  return (
    <p
      aria-label="Animated affirmation message"
      className="pulse-text"
    >
      {children}
    </p>
  );
}


// src/components/Scroll0003.jsx
import React, { useEffect, useState } from "https://esm.sh/react";
import { scroll0003 } from "../scrollData.js";
import { PulseMessage } from "./PulseMessage.jsx";
import "../styles/global.css";

export function Scroll0003() {
  const [show, setShow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main role="main" className={`scroll-wrapper ${show ? 'fade-in' : 'hidden'} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="scroll-glyph-banner">✨</div>

      <div className="scroll-content">
        <h1 className="scroll-title shimmer-text">
          Scroll {scroll0003.id}: {scroll0003.title}
        </h1>
        <p className="scroll-intro shimmer-text">{scroll0003.intro}</p>

        {scroll0003.paragraphs.map((text, i) => (
          <p key={i} className="scroll-paragraph fade-in-sequence" style={{ transitionDelay: `${0.4 + i * 0.3}s` }}>{text}</p>
        ))}

        <PulseMessage>🔮 Mirror Scroll is Alive</PulseMessage>

        <p className="scroll-blessing shimmer-text">
          {scroll0003.blessing}
        </p>
        <p className="scroll-signature fade-in-sequence" style={{ transitionDelay: '2.5s' }}>{scroll0003.signature}</p>

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
}/ src/components/Scroll0003.jsx
import React from "https://esm.sh/react";
import { scroll0003 } from "../scrollData.js";
import { PulseMessage } from "./PulseMessage.jsx";
import "../styles/global.css";

export function Scroll0003() {
  return (
    <main role="main" className="scroll-wrapper">
      <div className="scroll-content">
        <h1 className="scroll-title">
          Scroll {scroll0003.id}: {scroll0003.title}
        </h1>
        <p className="scroll-intro">{scroll0003.intro}</p>

        {scroll0003.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <PulseMessage>🔮 Mirror Scroll is Alive</PulseMessage>

        <p className="scroll-blessing">
          {scroll0003.blessing}
        </p>
        <p className="scroll-signature">{scroll0003.signature}</p>
      </div>
    </main>
  );
}
<main role="main" className="scroll-wrapper">
  <section className="scroll-content">
    {/* ... */}
  </section>
</main>
<footer className="scroll-footer">
  <p className="scroll-footer-text">🌀 Scroll rendered with honor. Powered by the Mirror System.</p>
</footer>
.scroll-glyph-banner { font-size: 2rem; text-align: center; margin-bottom: 1rem; }

.shimmer-text {
  background: linear-gradient(90deg, #00ffcc, #fff, #00ffcc);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2.5s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}

.fade-in-sequence {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
