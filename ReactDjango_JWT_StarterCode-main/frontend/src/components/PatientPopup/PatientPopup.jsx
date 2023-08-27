import React, { useState } from 'react';
import Modal from 'react-modal';

const PatientPopup = ({ patient }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>View Details</button>

      <Modal isOpen={isPopupOpen} onRequestClose={closePopup}>
        <h2>Patient Details</h2>
        <p>Name: {patient.name}</p>
        <p>Age: {patient.age}</p>
        {/* Display more patient information */}
        <button onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default PatientPopup;
