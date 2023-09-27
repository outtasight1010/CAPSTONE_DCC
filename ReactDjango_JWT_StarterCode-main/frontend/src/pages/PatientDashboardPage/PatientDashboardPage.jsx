import React, { useState } from "react";
import { Link } from "react-router-dom";
import './PatientDashboardPage.css';
import QueuePopup from "../../components/QueuePopup/QueuePopup";

const PatientDashboardPage = () => {
    const [isQueuePopupOpen, setIsQueuePopupOpen] = useState(false);
    const [showRideshareMessage, setShowRideshareMessage] = useState(false);

    // Function to open the QueuePopup
    const openQueuePopup = () => {
        setIsQueuePopupOpen(true);
    };

    // Function to close the QueuePopup
    const closeQueuePopup = () => {
        setIsQueuePopupOpen(false);
    };

    // Handler function to show the rideshare message
    const handleRideshareClick = () => {
        setShowRideshareMessage(true);

        
        setTimeout(() => {
            setShowRideshareMessage(false);
        }, 5000); // Hide the message after 5 seconds 
    };

    return (
        <div className="patient-dashboard-container">
            <h2>Welcome to Your Patient Dashboard</h2>

            <Link to="/add-insurance" className="add-info-button">
                Add Insurance Credentials
            </Link>

            <button onClick={handleRideshareClick} className="add-info-button">
                Add Rideshare
            </button>

            <button onClick={openQueuePopup} className="view-queue-button">
                View Queue
            </button>

            {showRideshareMessage && (
                <div className="rideshares-message">
                    Thank you for choosing a rideshare. Please check your phone for details now.
                </div>
            )}

            
            {isQueuePopupOpen && <QueuePopup onClose={closeQueuePopup} />}
        </div>
    );
};

export default PatientDashboardPage;


