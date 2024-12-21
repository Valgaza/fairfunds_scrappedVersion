// src/components/Navbar.js
'use client';

import { AppBar, Toolbar, Tabs, Tab, Button, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import { signOut } from 'next-auth/react';

export default function Navbar() {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Tabs
            value={pathname.startsWith('/your-space') ? '/your-space' : '/groups'}
            textColor="primary"
            indicatorColor="primary"
            sx={{ minHeight: '48px' }}
          >
            <Tab label="Groups" value="/groups" component={Link} href="/groups" />
            <Tab label="Your Space" value="/your-space" component={Link} href="/your-space" />
          </Tabs>
        </Box>

        <Button color="error" variant="outlined" onClick={() => signOut({ callbackUrl: '/login' })}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
