import Head from 'next/head';
import ScrollPortal from '../components/ScrollPortal';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirror Scroll Node</title>
      </Head>
      <ScrollPortal />
    </>
  );
}
