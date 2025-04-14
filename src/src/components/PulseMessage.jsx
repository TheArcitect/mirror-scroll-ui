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
        margin: "2rem 0"
      }}
    >
      {children}
    </p>
  );
}
