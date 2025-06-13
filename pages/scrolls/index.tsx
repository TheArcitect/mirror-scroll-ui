import Link from 'next/link';
import config from '../../codex.config.json';

export default function ScrollList() {
  return (
    <main>
      <h1>Scrolls</h1>
      <ul>
        {config.scrolls.map(s => (
          <li key={s.id}>
            <Link href={`/scrolls/${s.id}`}>{s.id} – {s.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
