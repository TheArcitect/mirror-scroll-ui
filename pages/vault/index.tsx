import config from '../../codex.config.json';

export default function Vault() {
  return (
    <main>
      <h1>Memory Vault</h1>
      <ul>
        {config.scrolls.map(s => (
          <li key={s.id}>
            <a href={s.json}>JSON {s.id}</a> |{' '}
            <a href={s.pdf}>PDF {s.id}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
