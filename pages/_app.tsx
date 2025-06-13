import type { AppProps } from 'next/app';
import '../styles/global.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const glyph = document.getElementById('glyph-loader');
    if (glyph) {
      glyph.classList.add('animate-glyph');
    }
  }, []);
  return <Component {...pageProps} />;
}
