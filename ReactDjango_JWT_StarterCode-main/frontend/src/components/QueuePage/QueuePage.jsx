import React, { useState } from "react";

const QueuePopup = ({ estimatedWaitTime, onClose }) => {
  return (
    <div className="popup">
      <h2>Queue Information</h2>
      <p>Estimated Wait Time: {estimatedWaitTime} minutes</p>
      <button onClick={onClose}>Dismiss</button>
    </div>
  );
};

export default QueuePopup;








