import React from "react";
import { Link } from "react-router-dom";
import './PatientDashboardPage.css';

const PatientDashboardPage = () => {
  return (
    <div>
      <h2>Welcome to Your Dashboard</h2>
      <p>Here, you can manage your healthcare information.</p>

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
