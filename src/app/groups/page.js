'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function GroupsPage() {
  const { data: session } = useSession();
  const [activePage, setActivePage] = useState('primary');

  return (
    <ProtectedRoute>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar Navigation */}
        <nav style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <h2>Groups</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <button onClick={() => setActivePage('primary')} style={{ margin: '0.5rem 0' }}>
                Primary Page
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('secondary')} style={{ margin: '0.5rem 0' }}>
                Secondary Page
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('tertiary')} style={{ margin: '0.5rem 0' }}>
                Tertiary Page
              </button>
            </li>
          </ul>

          <button onClick={() => signOut()} style={{ marginTop: '1rem' }}>Sign Out</button>
        </nav>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: '2rem' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h1>Group Expenses</h1>
            <Link href="/your-space" style={{ textDecoration: 'none', color: 'blue' }}>Your Space</Link>
          </header>

          {/* Primary Page - Placeholder Form */}
          {activePage === 'primary' && (
            <div>
              <h2>Individual Balances</h2>
              <form style={{ marginBottom: '2rem' }}>
                <input
                  type="text"
                  placeholder="Payer's Name"
                  style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <input
                  type="text"
                  placeholder="Participants (comma-separated)"
                  style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <button type="button" style={{ padding: '0.5rem 1rem' }}>Add Expense</button>
              </form>
            </div>
          )}

          {/* Secondary Page - Placeholder Form */}
          {activePage === 'secondary' && (
            <div>
              <h2>Group Balances</h2>
              <form style={{ marginBottom: '2rem' }}>
                <input
                  type="text"
                  placeholder="Group Name"
                  style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <input
                  type="text"
                  placeholder="Participants (comma-separated)"
                  style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <button type="button" style={{ padding: '0.5rem 1rem' }}>Add Group Expense</button>
              </form>
            </div>
          )}

          {/* Tertiary Page - Placeholder */}
          {activePage === 'tertiary' && (
            <div>
              <h2>Activity Log</h2>
              <p>Activity log will display here.</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
