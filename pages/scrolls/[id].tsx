import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'
import fs from 'fs'
import config from '../../codex.config.json'

type Scroll = {
  id: string
  title: string
  invocation: string
  body: string
  voice: boolean
}

export default function ScrollPage({ scroll }: { scroll: Scroll }) {
  return (
    <div>
      <h1>{scroll.title}</h1>
      <p>{scroll.invocation}</p>
      <p>{scroll.body}</p>
      {scroll.voice && <audio controls src={`/vault/${scroll.id}.mp3`} />}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = config.map(s => ({ params: { id: s.id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const filePath = path.join(process.cwd(), 'data', 'vault', `${id}.json`)
  const content = fs.readFileSync(filePath, 'utf8')
  const scroll = JSON.parse(content)
  return { props: { scroll } }
}
