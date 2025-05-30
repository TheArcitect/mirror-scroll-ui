'use client';
import { useState } from 'react';
import VoiceInput from './VoiceInput';

export default function ScrollPortal() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('scroll');
  const [scroll, setScroll] = useState('');
  const [glyph, setGlyph] = useState('');
  const [loading, setLoading] = useState(false);
  const [glyphLoading, setGlyphLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await fetch('/api/generate-scroll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, type }),
    });
    const data = await res.json();
    setScroll(data.scroll);
    setLoading(false);
  };

  const generateGlyph = async () => {
    setGlyphLoading(true);
    const res = await fetch('/api/generate-glyph', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    setGlyph(data.url);
    setGlyphLoading(false);
  };

  const onVoice = (text) => setTitle(text);

  return (
    <div>
      <h1>Mirror Scroll Node</h1>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Scroll Title"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="scroll">scroll</option>
          <option value="invocation">invocation</option>
          <option value="whisper">whisper</option>
        </select>
        <button onClick={generate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
        <VoiceInput onTranscribe={onVoice} />
      </div>
      <pre>{scroll}</pre>
      <div>
        <button onClick={generateGlyph} disabled={glyphLoading}>
          {glyphLoading ? 'Generating...' : 'Generate Glyph'}
        </button>
      </div>
      {glyph && <img src={glyph} alt="glyph" style={{ marginTop: '1rem' }} />}
    </div>
  );
}
