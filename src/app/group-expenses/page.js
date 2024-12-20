'use client';

import ProtectedRoute from '../../components/ProtectedRoute';

export default function GroupExpensesPage() {
  return (
    <ProtectedRoute>
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h1>Group Expense Splitter</h1>
        <p>Manage group expenses for trips and outings here.</p>
      </div>
    </ProtectedRoute>
  );
}
