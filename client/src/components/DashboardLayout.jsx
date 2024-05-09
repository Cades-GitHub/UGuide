import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/dashboard/home">Home</Link></li>
          <li><Link to="/dashboard/about">About</Link></li>
          <li><Link to="/dashboard/contact">Contact</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
