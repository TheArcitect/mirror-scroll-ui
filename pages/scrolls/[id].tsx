import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'

interface ScrollData {
  id: string
  title: string
  body?: string
  invocation?: string
  author?: string
  date?: string
  glyph?: string
}

export default function ScrollPage({ scroll }: { scroll: ScrollData }) {
  if (!scroll) return <p>Failed to load scroll.</p>
  return (
    <main className="scroll">
      <h1>{scroll.title}</h1>
      {scroll.invocation && <p><em>{scroll.invocation}</em></p>}
      {scroll.body && <p>{scroll.body}</p>}
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const vaultDir = path.join(process.cwd(), 'public', 'vault')
  const files = fs.readdirSync(vaultDir)
  const paths = files.map(f => ({ params: { id: f.replace('.json', '') } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const filePath = path.join(process.cwd(), 'public', 'vault', `${id}.json`)
  const scroll = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  return { props: { scroll } }
}
