'use client';

import ProtectedRoute from '../../components/ProtectedRoute';

export default function ExpenseTrackerPage() {
  return (
    <ProtectedRoute>
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h1>Personal Expense Tracker</h1>
        <p>Track your individual expenses here.</p>
      </div>
    </ProtectedRoute>
  );
}
