import type { AppProps } from 'next/app'
import '../styles/global.css'
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({ subsets: ['latin'], display: 'swap' })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={garamond.className}>
      <Component {...pageProps} />
    </div>
  )
}
