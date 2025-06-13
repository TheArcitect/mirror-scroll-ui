import fs from 'fs'
import path from 'path'
import Link from 'next/link'

interface ScrollMeta { id: string; title: string }

export async function getStaticProps() {
  const vaultDir = path.join(process.cwd(), 'public', 'vault')
  const files = fs.readdirSync(vaultDir)
  const scrolls = files.map(f => {
    const data = JSON.parse(fs.readFileSync(path.join(vaultDir, f), 'utf8'))
    return { id: data.id, title: data.title }
  })
  return { props: { scrolls } }
}

export default function Vault({ scrolls }: { scrolls: ScrollMeta[] }) {
  return (
    <main>
      <h1>Vault</h1>
      <ul>
        {scrolls.map(s => (
          <li key={s.id}>
            <Link href={`/vault/${s.id}.json`}>JSON {s.id}</Link>{' | '}
            <Link href={`/Scroll_${s.id}_${s.title.replace(/\s+/g,'_')}.pdf`}>PDF</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
