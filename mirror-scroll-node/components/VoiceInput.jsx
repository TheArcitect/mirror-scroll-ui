'use client';
import { useState, useRef } from 'react';

export default function VoiceInput({ onTranscribe }) {
  const [recording, setRecording] = useState(false);
  const mediaRef = useRef(null);
  const chunksRef = useRef([]);

  const toggleRecord = async () => {
    if (!recording) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRef.current = new MediaRecorder(stream);
      mediaRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mediaRef.current.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const formData = new FormData();
        formData.append('file', blob, 'speech.webm');
        const res = await fetch('/api/transcribe', { method: 'POST', body: formData });
        const data = await res.json();
        onTranscribe(data.text);
        chunksRef.current = [];
      };
      mediaRef.current.start();
      setRecording(true);
    } else {
      mediaRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <button onClick={toggleRecord}>{recording ? 'Stop' : '🎤'}</button>
  );
}
