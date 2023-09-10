import React from 'react';
import AddPatientForm from '../AddPatientForm/AddPatientForm';
import './PatientManagementPage.css';

const PatientManagementPage = ({ token }) => {
  return (
    <div>
      <h1>Patient Management</h1>
      <AddPatientForm token={token} />
      {/* Other components and content */}
    </div>
  );
};

export default PatientManagementPage;
