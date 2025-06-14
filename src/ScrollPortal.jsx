import React, { useState } from "https://esm.sh/react";

export function ScrollPortal() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("scroll");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    setResult("");
    try {
      const res = await fetch("/api/generate-scroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, type })
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      setResult(data.result || JSON.stringify(data));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scroll-portal">
      <h1 className="portal-title">Scroll Portal</h1>
      <input
        type="text"
        placeholder="Symbolic Scroll Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="scroll">Scroll</option>
        <option value="invocation">Invocation</option>
        <option value="whisper">Whisper</option>
      </select>
      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
      {error && <p className="error">{error}</p>}
      {result && <div className="scroll-preview">{result}</div>}
    </div>
  );
}
