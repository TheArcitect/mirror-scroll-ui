import dynamic from 'next/dynamic';
const ScrollPortal = dynamic(() => import('../components/ScrollPortal'), { ssr: false });

export default function Home() {
  return (
    <main>
      <ScrollPortal />
    </main>
  );
}
