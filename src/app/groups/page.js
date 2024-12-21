'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function GroupsPage() {
  const { data: session } = useSession();
  const [activePage, setActivePage] = useState('primary');
  const theme = useTheme(); // Access the current theme

  return (
    <ProtectedRoute>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar Navigation */}
        <Box
          sx={{
            width: '200px',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            padding: '1rem',
            boxShadow: 1,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setActivePage('primary')}
            sx={{ marginBottom: '0.5rem' }}
          >
            Primary Page
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setActivePage('secondary')}
            sx={{ marginBottom: '0.5rem' }}
          >
            Secondary Page
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setActivePage('tertiary')}
            sx={{ marginBottom: '0.5rem' }}
          >
            Tertiary Page
          </Button>
        </Box>

        {/* Main Content Area */}
        <Box sx={{ flex: 1, padding: '2rem', backgroundColor: theme.palette.background.default }}>
          <Box
            component="header"
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}
          >
            <Typography variant="h4">Group Expenses</Typography>
            <Link href="/your-space" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
            </Link>
          </Box>

          {/* Primary Page - Placeholder Form */}
          {activePage === 'primary' && (
            <Box>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                Individual Balances
              </Typography>
              <form>
                <input type="text" placeholder="Payer's Name" style={{ padding: '0.5rem', marginRight: '1rem' }} />
                <input type="number" placeholder="Amount" style={{ padding: '0.5rem', marginRight: '1rem' }} />
                <input type="text" placeholder="Participants (comma-separated)" style={{ padding: '0.5rem', marginRight: '1rem' }} />
                <Button variant="contained" color="primary">Add Expense</Button>
              </form>
            </Box>
          )}

          {/* Secondary Page - Placeholder Form */}
          {activePage === 'secondary' && (
            <Box>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                Group Balances
              </Typography>
              <form>
                <input type="text" placeholder="Group Name" style={{ padding: '0.5rem', marginRight: '1rem' }} />
                <input type="number" placeholder="Amount" style={{ padding: '0.5rem', marginRight: '1rem' }} />
                <input type="text" placeholder="Participants (comma-separated)" style={{ padding: '0.5rem', marginRight: '1rem' }} />
                <Button variant="contained" color="primary">Add Group Expense</Button>
              </form>
            </Box>
          )}

          {/* Tertiary Page - Placeholder */}
          {activePage === 'tertiary' && (
            <Box>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                Activity Log
              </Typography>
              <Typography>No activities logged yet.</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </ProtectedRoute>
  );
}
