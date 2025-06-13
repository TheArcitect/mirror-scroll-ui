import { useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/scrolls');
  }, [router]);
  return null;
}
