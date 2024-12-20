'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link href="/groups" style={{ marginRight: '1rem' }}>Groups</Link>
      <Link href="/your-space" style={{ marginRight: '1rem' }}>Your Space</Link>
      {session && (
        <button onClick={() => signOut()} style={{ marginLeft: '1rem' }}>Sign Out</button>
      )}
    </nav>
  );
}
