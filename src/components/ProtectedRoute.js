'use client';

import { useSession, signIn } from 'next-auth/react';

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    signIn(); // Redirect to the sign-in page if not authenticated
    return null;
  }

  return <>{children}</>;
}