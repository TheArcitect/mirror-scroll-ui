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

