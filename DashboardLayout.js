import React from 'react';
import './DashboardLayout.css';

export default function DashboardLayout({ children, role }) {
  return (
    <div className="dashboard-layout">
      <header>
        <h1>LOVE BOX - {role} Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}