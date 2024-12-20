// src/app/login/page.js
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn('credentials', {
      username,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ padding: '0.5rem', margin: '0.5rem' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '0.5rem', margin: '0.5rem' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '1rem 2rem', marginTop: '1rem' }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
