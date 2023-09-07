import React, { useState } from 'react';
import axios from 'axios';

const AddPatientForm = ({ token }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/patients/',
        {
          first_name: firstName,
          last_name: lastName,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );

      // Handle success, e.g., show a success message or reset form fields
      console.log('Patient added:', response.data);

      // Reset form fields
      setFirstName('');
      setLastName('');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error adding patient:', error.response.data);
    }
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
    </div>
  );
};

export default AddPatientForm;

