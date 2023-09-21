import React from "react";
import { Link } from "react-router-dom";
import './PatientDashboardPage.css';

const PatientDashboardPage = () => {
  return (
    <div className="patient-dashboard-container">
      <h2>Welcome to Your Patient Dashboard</h2>

      <Link to="/add-insurance" className="add-info-button">
        Add Insurance Credentials
      </Link>
      <Link to="/add-rideshare" className="add-info-button">
        Add Rideshare
      </Link>
    </div>
  );
};

export default PatientDashboardPage;

