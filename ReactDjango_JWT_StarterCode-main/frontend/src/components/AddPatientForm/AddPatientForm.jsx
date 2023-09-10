import React, { useState } from 'react';
import './AddPatientForm.css';

const AddPatientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patients, setPatients] = useState([]); // This state will store patient entries

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new patient entry object
    const newPatient = {
      firstName,
      lastName,
    };

    // Add the new patient entry to the list
    setPatients([...patients, newPatient]);

    // Reset form fields
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
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
      <table>
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


