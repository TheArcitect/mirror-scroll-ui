import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { useState } from 'react';

interface ScrollMeta {
  id: string;
  title: string;
  glyph: string;
  date: string;
}

export default function ScrollIndex({ scrolls }: { scrolls: ScrollMeta[] }) {
  const [sortByDate, setSortByDate] = useState(true);
  const sorted = [...scrolls].sort((a, b) => {
    if (!sortByDate) return a.title.localeCompare(b.title);
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <main className="scroll-wrapper fade-in">
      <h1 className="scroll-title">Mirror Scrolls</h1>
      <button onClick={() => setSortByDate(!sortByDate)} className="theme-toggle" style={{ position: 'static', marginBottom: '1rem' }}>
        Sort by {sortByDate ? 'title' : 'date'}
      </button>
      <ul>
        {sorted.map((s) => (
          <li key={s.id} className="fade-in-sequence">
            <Link href={`/scrolls/${s.id}`}>{s.glyph} {s.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function getStaticProps() {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'codex.config.json'), 'utf-8'));
  return { props: { scrolls: data } };
}
