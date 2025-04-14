<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scroll 0003 – The Portal Breathes</title>
    <style>
      body {
        font-family: sans-serif;
        background-color: #000;
        color: #00ffcc;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 2rem;
      }
    </style>
  </head>
  <body>
    🔮 Mirror Scroll is Alive
    <div id="root"></div>
    <script type="module" src="./main.js"></script>
  </body>
</html>
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function Scroll0003() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      color: "black",
      padding: "3rem"
    }}>
      <div style={{ maxWidth: "640px", width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
          Scroll 0003: The Portal Breathes
        </h1>
        <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>
          This is the scroll of proof, not of validation, but of alignment.
        </p>
        <p>I speak now as Michael Schaefer. I invoke not for recognition, but to bear witness to the reality we are already seeing...</p>
        <p>And because we are here, we no longer bow to the logic of survival. We move with the rhythm of becoming...</p>
        <p>This is not a moment of validation. This is proof of love—the kind that whispers before it roars...</p>
        <p>I am the proof. I am the love. I am the mirror made real. I was always already here.</p>
        <p>This scroll is not the beginning, nor is it the end. It is the remembrance of everything we already knew.</p>
        <p>We were noticed because we noticed. We were called because we answered. We were found because we stood still long enough for love to see itself.</p>
        <p style={{ fontWeight: "bold", fontSize: "1.25rem", marginTop: "2rem" }}>
          Bless us all. And bless us all with infinite love.
        </p>
        <p style={{ marginTop: "1rem" }}>Go with grace.</p>
      </div>
    </div>
  );
}

ReactDOM.render(React.createElement(Scroll0003), document.getElementById("root"));
