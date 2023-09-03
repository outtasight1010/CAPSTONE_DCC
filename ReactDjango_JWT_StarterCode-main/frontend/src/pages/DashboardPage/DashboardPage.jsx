import React from "react";
import { Link } from "react-router-dom";

import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        <p>What would you like to do?</p>
        <div className="dashboard-actions">
        <Link to="/select-patient">In Holding</Link>
          <Link to="/view-queue"> Queue</Link>
          <Link to="/add-patient">Processed</Link>
          <Link to="/add-quote">Daily Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
