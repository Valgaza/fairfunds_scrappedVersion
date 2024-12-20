// src/app/layout.js
'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { lightTheme, darkTheme } from '../theme';
import Navbar from '../components/Navbar'; // Import the Navbar component

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Navbar /> {/* Add the Navbar component here */}
            <button onClick={toggleTheme} style={{ margin: '1rem' }}>
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
