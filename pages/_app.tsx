import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <Component {...pageProps} />
    </>
  )
}
