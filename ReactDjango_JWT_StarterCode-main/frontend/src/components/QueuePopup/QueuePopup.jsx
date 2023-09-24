import React from "react";
import './QueuePopup.css';

const QueuePopup = ({ onClose }) => {
  // This will generate a random queue position (for demonstration)
  const queuePosition = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="queue-popup">
      <h3>Your Queue Position:</h3>
      <p>{queuePosition} in line</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QueuePopup;
