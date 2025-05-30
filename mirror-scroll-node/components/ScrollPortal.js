import { useState, useRef } from 'react';

export default function ScrollPortal() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('scroll');
  const [output, setOutput] = useState('');
  const [glyphUrl, setGlyphUrl] = useState('');
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const generateScroll = async () => {
    const res = await fetch('/api/generate-scroll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, type })
    });
    const data = await res.json();
    setOutput(data.text);
  };

  const generateGlyph = async () => {
    const res = await fetch('/api/generate-glyph', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    const data = await res.json();
    setGlyphUrl(data.url);
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = e => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    mediaRecorderRef.current.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.onloadend = async () => {
        const audio = reader.result;
        const resp = await fetch('/api/transcribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ audio })
        });
        const data = await resp.json();
        setTitle(data.text);
      };
      reader.readAsDataURL(blob);
      chunksRef.current = [];
    };
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div>
      <h1>Mirror Scroll Node</h1>
      <div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Scroll Title"
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="scroll">scroll</option>
          <option value="invocation">invocation</option>
          <option value="whisper">whisper</option>
        </select>
        <button onClick={generateScroll}>Generate</button>
        <button onClick={recording ? stopRecording : startRecording}>
          {recording ? 'Stop' : 'Voice Input'}
        </button>
      </div>
      {output && (
        <div>
          <h2>Preview</h2>
          <p>{output}</p>
          <button onClick={generateGlyph}>Generate Glyph</button>
          {glyphUrl && <img src={glyphUrl} alt="glyph" />}
        </div>
      )}
    </div>
  );
}
