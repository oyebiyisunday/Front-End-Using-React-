import React from 'react';
import DashboardLayout from './DashboardLayout';
import SummaryBoard from './SummaryBoard';
import ItemManagement from './ItemManagement';
import AttendantManagement from './AttendantManagement';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function AdminDashboard() {
  return (
    <DashboardLayout role="Admin">
      <Tabs>
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Items</Tab>
          <Tab>Attendants</Tab>
        </TabList>

        <TabPanel>
          <SummaryBoard role="Admin" />
        </TabPanel>
        <TabPanel>
          <ItemManagement />
        </TabPanel>
        <TabPanel>
          <AttendantManagement />
        </TabPanel>
      </Tabs>
    </DashboardLayout>
  );
}