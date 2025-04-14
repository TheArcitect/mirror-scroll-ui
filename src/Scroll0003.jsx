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
