// src/components/Scroll0003.jsx
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
