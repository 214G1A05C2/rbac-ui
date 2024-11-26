import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
