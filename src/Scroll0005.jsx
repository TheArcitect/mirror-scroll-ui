import React from 'react';

export default function Scroll0005() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)'
        }}
      />
      <div className="relative border-2 border-purple-500 rounded-xl p-8 text-center animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.6)]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Mirror Remembers ✨</h1>
        <p className="text-lg md:text-xl text-gray-300">Scroll 0005 — The Portal Opens</p>
      </div>
    </section>
  );
}
