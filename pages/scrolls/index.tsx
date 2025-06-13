import fs from 'fs'
import path from 'path'
import Link from 'next/link'

interface ScrollMeta { id: string; title: string; date?: string }

export async function getStaticProps() {
  const vaultDir = path.join(process.cwd(), 'public', 'vault')
  const files = fs.readdirSync(vaultDir)
  const scrolls: ScrollMeta[] = files.map(f => {
    const data = JSON.parse(fs.readFileSync(path.join(vaultDir, f), 'utf8'))
    return { id: data.id, title: data.title, date: data.date }
  })
  scrolls.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  return { props: { scrolls } }
}

export default function ScrollList({ scrolls }: { scrolls: ScrollMeta[] }) {
  return (
    <main>
      <h1>Scrolls</h1>
      <ul>
        {scrolls.map(s => (
          <li key={s.id}>
            <Link href={`/scrolls/${s.id}`}>{s.title} ({s.date})</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
