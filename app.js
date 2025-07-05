import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import AttendantDashboard from './components/AttendantDashboard';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import './App.css';

Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/attendant" element={<AttendantDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;