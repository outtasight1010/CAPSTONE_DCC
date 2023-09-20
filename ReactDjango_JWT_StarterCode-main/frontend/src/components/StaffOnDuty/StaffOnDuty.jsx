import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import './StaffOnDuty.css';

const StaffOnDutyPage = () => {
  const [staffOnDuty, setStaffOnDuty] = useState([]);
  const [, token] = useAuth();

  useEffect(() => {
    // Fetch the list of medical staff members on duty
    axios
      .get('http://127.0.0.1:8000/api/medstaff/staff-on-duty/', {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header with the Bearer token
        },
      })
      .then((response) => {
        // Handle the response data and update the state
        setStaffOnDuty(response.data);
      })
      .catch((error) => {
        // Handle errors if needed
        console.error(error);
      });
  }, [token]); // Include the token in the dependency array if it can change

  return (
    <div className="staff-on-duty-container">
      <h2>Staff on Duty</h2>
      <ul>
        {staffOnDuty.map((staff) => (
          <li key={staff.id} className="staff-on-duty-item">
            <img
              src={'https://www.elemenohealth.com/wp-content/uploads/2021/09/largeGroup.png'}
              alt="Staff Member"
              className="staff-image"
            />
            {staff.full_name} - {staff.job} - {staff.title} - {staff.shift}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffOnDutyPage;







