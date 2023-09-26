import React, { useState } from 'react';
import './AddPatientForm.css';

const AddPatientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patients, setPatients] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      firstName,
      lastName,
    };

    setPatients([...patients, newPatient]);

    setFirstName('');
    setLastName('');
  };

  return (
    <div className="add-patient-container">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>
      <table className="patient-list">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddPatientForm;



