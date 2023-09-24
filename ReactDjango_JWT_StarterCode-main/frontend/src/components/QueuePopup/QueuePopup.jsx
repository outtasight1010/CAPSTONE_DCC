import React from "react";
import './QueuePopup.css';

const QueuePopup = ({ onClose }) => {
  // Array of patient names
  const patientNames = ["Teaqula", "Michelle", "Laura", "Erin", "Vincent"];

  // Randomly select a patient name
  const randomName = patientNames[Math.floor(Math.random() * patientNames.length)];

  // This will generate a random queue position (for demonstration)
  const queuePosition = Math.floor(Math.random() * 50) + 1;

  return (
    <div className="queue-popup">
      <h3>Your Queue Position:</h3>
      <p>Welcome to the waiting room! You are number {queuePosition} in line.</p>
      <p>Patient: {randomName}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QueuePopup;

