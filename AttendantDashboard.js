import React from 'react';
import DashboardLayout from './DashboardLayout';
import SummaryBoard from './SummaryBoard';

export default function AttendantDashboard() {
  return (
    <DashboardLayout role="Attendant">
      <SummaryBoard role="Attendant" />
    </DashboardLayout>
  );
}