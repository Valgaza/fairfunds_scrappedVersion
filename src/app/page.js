// src/app/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/groups');
  }, [router]);

  return null; // Empty component since we're redirecting
}
