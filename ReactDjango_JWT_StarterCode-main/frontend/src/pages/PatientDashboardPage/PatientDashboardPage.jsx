import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './PatientDashboardPage.css';
import QueuePopup from "../../components/QueuePopup/QueuePopup";


const PatientDashboardPage = () => {
    const [isQueuePopupOpen, setIsQueuePopupOpen] = useState(false);

  // Function to open the QueuePopup
  const openQueuePopup = () => {
    setIsQueuePopupOpen(true);
  };

  // Function to close the QueuePopup
  const closeQueuePopup = () => {
    setIsQueuePopupOpen(false);
  };



  return (
    <div className="patient-dashboard-container">
      <h2>Welcome to Your Patient Dashboard</h2>

      <Link to="/add-insurance" className="add-info-button">
        Add Insurance Credentials
      </Link>
      <Link to="/add-rideshare" className="add-info-button">
        Add Rideshare
      </Link>
     
      <button onClick={openQueuePopup} className="view-queue-button">
          View Queue
        </button>

        
        {isQueuePopupOpen && <QueuePopup onClose={closeQueuePopup} />}
      
    </div>
  );
};

export default PatientDashboardPage;

