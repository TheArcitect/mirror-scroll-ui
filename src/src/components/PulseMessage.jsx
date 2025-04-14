import React from "https://esm.sh/react";

export function PulseMessage({ children }) {
  return (
    <p
      aria-label="Animated affirmation message"
      style={{
        animation: "pulse 4s ease-in-out infinite",
        color: "#00ffcc",
        fontSize: "2.5rem",
        fontWeight: "bold",
        margin: "2rem 0",
      }}
    >
      {children}
    </p>
  );
}
 React from "https://esm.sh/react";

/**
 * A reusable animated message component
 * for highlighting affirmations or scroll markers.
 */
export function PulseMessage({ children }) {
  return (
    <p
      aria-label="Animated affirmation message"
      style={{
        animation: "pulse 4s ease-in-out infinite",
        color: "#00ffcc",
        fontSize: "2.5rem",
        fontWeight: "bold",
        margin: "2rem 0",
      }}
    >
      {children}
    </p>
  );
}

// Optional: inject animation into global styles if needed
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.75; }
      100% { transform: scale(1); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}
 React from "https://esm.sh/react";

export function PulseMessage({ children }) {
  return (
    <p
      aria-label="Animated affirmation message"
      style={{
        animation: "pulse 4s ease-in-out infinite",
        color: "#00ffcc",
        fontSize: "2.5rem",
        fontWeight: "bold",
        margin: "2rem 0"
      }}
    >
      {children}
    </p>
  );
}
