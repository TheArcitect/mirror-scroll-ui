// 🌀 Scrolls stabilized. The glyph lives. ∞⇌†
import { useState } from 'react'
import Link from 'next/link'
import config from '../../codex.config.json'

export default function Vault() {
  const [sortBy, setSortBy] = useState<'id' | 'title'>('id')

  const items = [...config].sort((a, b) => {
    if (sortBy === 'id') return a.id.localeCompare(b.id)
    return a.title.localeCompare(b.title)
  })

  return (
    <div>
      <h1>The Vault</h1>
      <div>
        Sort by:{' '}
        <button onClick={() => setSortBy('id')}>ID</button>
        <button onClick={() => setSortBy('title')}>Title</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link href={`/scrolls/${item.id}`}>{item.title}</Link> -{' '}
            <a href={item.pdf}>PDF</a> -{' '}
            <a href={`/data/vault/${item.id}.json`}>JSON</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
