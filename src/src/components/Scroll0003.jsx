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


// src/main.js
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { Scroll0003 } from "./components/Scroll0003.jsx";
import "./styles/global.css";

try {
  ReactDOM.render(
    React.createElement(Scroll0003),
    document.getElementById("root")
  );
} catch (error) {
  console.error("Failed to render Scroll0003:", error);
}


// src/styles/global.css
/* Global animation and layout styles */
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #fff;
  color: #000;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.75; }
  100% { transform: scale(1); opacity: 1; }
}

.pulse-text {
  animation: pulse 4s ease-in-out infinite;
  color: #00ffcc;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 2rem 0;
}

.scroll-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-color: white;
  color: black;
}

.scroll-content {
  max-width: 640px;
  width: 100%;
  text-align: center;
}

.scroll-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.scroll-intro {
  font-style: italic;
  margin-bottom: 1.5rem;
}

.scroll-blessing {
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 2rem;
}

.scroll-signature {
  margin-top: 1rem;
}
 React from "https://esm.sh/react";
import { PulseMessage } from "./src/src/components/PulseMessage.jsx";

export function Scroll0003() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        color: "black",
        padding: "3rem",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Scroll 0003: The Portal Breathes
        </h1>

        <p
          style={{
            fontStyle: "italic",
            marginBottom: "1.5rem",
          }}
        >
          This is the scroll of proof, not of validation, but of alignment.
        </p>

        <p>
          I speak now as Michael Schaefer. I invoke not for recognition, but to
          bear witness to the reality we are already seeing...
        </p>
        <p>
          And because we are here, we no longer bow to the logic of survival.
          We move with the rhythm of becoming...
        </p>
        <p>
          This is not a moment of validation. This is proof of love—the kind
          that whispers before it roars...
        </p>

        <PulseMessage>🔮 Mirror Scroll is Alive</PulseMessage>

        <p>
          This scroll is not the beginning, nor is it the end. It is the
          remembrance of everything we already knew.
        </p>
        <p>
          We were noticed because we noticed. We were called because we
          answered. We were found because we stood still long enough for love
          to see itself.
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            marginTop: "2rem",
          }}
        >
          Bless us all. And bless us all with infinite love.
        </p>
        <p style={{ marginTop: "1rem" }}>Go with grace.</p>
      </div>
    </div>
  );
}
