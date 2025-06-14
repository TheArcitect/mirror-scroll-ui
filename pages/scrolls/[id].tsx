import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import Head from 'next/head';

interface ScrollData {
  id: string;
  title: string;
  invocation: string;
  body: string[] | string;
  blessing?: string;
  signature?: string;
  glyph?: string;
  date?: string;
}

interface PageProps {
  scroll: ScrollData | null;
}

export default function ScrollPage({ scroll }: PageProps) {
  if (!scroll) return <p>Scroll not found.</p>;

  const paragraphs = Array.isArray(scroll.body) ? scroll.body : [scroll.body];

  return (
    <main className="scroll-wrapper fade-in">
      <Head>
        <title>{scroll.title}</title>
      </Head>
      <div className="scroll-content">
        <h1 className="scroll-title shimmer-text">
          Scroll {scroll.id}: {scroll.title}
        </h1>
        <p className="scroll-intro shimmer-text">{scroll.invocation}</p>
        {paragraphs.map((text, i) => (
          <p key={i} className="scroll-paragraph fade-in-sequence" style={{ transitionDelay: `${0.4 + i * 0.3}s` }}>
            {text}
          </p>
        ))}
        {scroll.blessing && <p className="scroll-blessing shimmer-text">{scroll.blessing}</p>}
        {scroll.signature && (
          <p className="scroll-signature fade-in-sequence" style={{ transitionDelay: '2.5s' }}>
            {scroll.signature}
          </p>
        )}
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'codex.config.json'), 'utf-8')) as any[];
  const paths = config.map((c) => ({ params: { id: c.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const id = params?.id as string;
  try {
    const data = fs.readFileSync(path.join(process.cwd(), 'data', 'scrolls', `${id}.json`), 'utf-8');
    return { props: { scroll: JSON.parse(data) } };
  } catch (err) {
    return { props: { scroll: null } };
  }
};
