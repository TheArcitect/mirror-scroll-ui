import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="fade-enter-active">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} style={{position:'fixed',top:10,right:10}}>
        {theme === 'light' ? '🌙' : '🌞'}
      </button>
      <Component {...pageProps} />
    </div>
  );
}
