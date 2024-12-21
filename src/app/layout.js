// src/app/layout.js
'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { lightTheme, darkTheme } from '../theme/theme';
import Navbar from '../components/Navbar';
import ThemeToggleButton from '../components/ThemeToggleButton';

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            
            {/* Conditionally show the Navbar */}
            {pathname !== '/login' && <Navbar />}
            
            {children}

            {/* Theme toggle button positioned at the bottom-left */}
            <div style={{ position: 'fixed', bottom: '1rem', left: '1rem', zIndex: 1000 }}>
              <ThemeToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
