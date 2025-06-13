import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import config from '../../codex.config.json';

interface Section { type: string; text: string; }
interface ScrollData {
  id: string;
  title: string;
  date: string;
  glyph: string;
  pdf: string;
  whisper_audio: boolean;
  sections: Section[];
}

export default function ScrollPage({ scroll }: { scroll: ScrollData }) {
  const [data, setData] = useState<ScrollData | null>(null);

  useEffect(() => {
    fetch(scroll.json)
      .then(res => res.json())
      .then(setData);
  }, [scroll.json]);

  if (!data) return <p>Loading...</p>;
  return (
    <main>
      <h1>
        <span className="glyph">{scroll.glyph}</span> {data.title}
      </h1>
      {data.sections.map((s, i) => (
        <p key={i}>{s.text}</p>
      ))}
      <p><a href={scroll.pdf}>Download PDF</a></p>
      {scroll.whisper_audio && (
        <audio controls src={`/audio/${scroll.id}.mp3`}></audio>
      )}
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = config.scrolls.map(s => ({ params: { id: s.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const scroll = config.scrolls.find(s => s.id === params?.id) as any;
  return { props: { scroll } };
};
