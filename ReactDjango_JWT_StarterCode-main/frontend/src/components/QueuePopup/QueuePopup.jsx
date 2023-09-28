import React from "react";
import './QueuePopup.css';

const QueuePopup = ({ onClose }) => {
 
  const patientNames = ["Teaqula", "Michelle", "Laura", "Erin", "Vincent"];

  
  const randomName = patientNames[Math.floor(Math.random() * patientNames.length)];

  
  const queuePosition = Math.floor(Math.random() * 50) + 1;

  const minWaitTime = 30; 
const maxWaitTime = 360; 


const randomWaitTime = Math.floor(Math.random() * (maxWaitTime - minWaitTime + 1)) + minWaitTime;

console.log(`Random Wait Time: ${randomWaitTime} minutes`);
 

  return (
    <div className="queue-popup">
      <h3>Your Queue Position:</h3>
      <p>Welcome to the waiting room! You are number {queuePosition} in line.</p>
      <p>Patient: {randomName}</p>
      <p>Estimated Wait Time: {randomWaitTime} minutes</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QueuePopup;

