import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials.username === 'admin' && credentials.password === 'password') {
          return { id: 1, name: 'Admin' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

export const GET = handler;
export const POST = handler;
