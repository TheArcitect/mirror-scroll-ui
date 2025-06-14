import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface VaultEntry {
  id: string;
  title: string;
  pdf_file: string;
}

export default function VaultPage({ entries }: { entries: VaultEntry[] }) {
  return (
    <main className="scroll-wrapper fade-in">
      <h1 className="scroll-title">Vault Archive</h1>
      <ul>
        {entries.map((e) => (
          <li key={e.id} className="fade-in-sequence">
            <Link href={`/scrolls/${e.id}`}>{e.title}</Link>{' '}
            <a href={`/${e.pdf_file}`} download className="ml-2">[PDF]</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function getStaticProps() {
  const dir = path.join(process.cwd(), 'public', 'vault');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
  const entries: VaultEntry[] = files.map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'));
    return {
      id: data.id,
      title: data.title,
      pdf_file: `Scroll_${data.id}_${data.title.replace(/\s+/g, '_')}.pdf`,
    };
  });
  return { props: { entries } };
}
