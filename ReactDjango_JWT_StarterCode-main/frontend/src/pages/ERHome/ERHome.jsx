import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ERHome.css";

const ERHome = () => {
  const [user, token] = useAuth();
  const [patients, setPatients] = useState([]);
  const [activeQueue, setActiveQueue] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addedPatients, setAddedPatients] = useState([]);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const fetchPatients = async () => {
    try {
      let response = await axios.get("/api/patients/details/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setPatients(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchActiveQueue = async () => {
    try {
      let response = await axios.get("/api/queues/active/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setActiveQueue(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {

    fetchPatients();
    fetchActiveQueue();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/queues/add_patient/",
        { first_name: firstName, last_name: lastName },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setFirstName("");
      setLastName("");
      fetchPatients();
      fetchActiveQueue();
      setAddedPatients([...addedPatients, { first_name: firstName, last_name: lastName }]);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      {/* ... Existing content ... */}
      <h2>Added Patients:</h2>
      <ul>
        {addedPatients.map((patient, index) => (
          <li key={index}>{patient.first_name} {patient.last_name}</li>
        ))}
      </ul>
      <h2>All Patients:</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.first_name} {patient.last_name}</li>
        ))}
      </ul>
      <h2>Add Patient to Queue:</h2>
      <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} style={{ marginRight: "5px" }} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className = 'form-control'
          />
        </div>
        <div className = 'form-group'>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className = 'form-control'
          />
        </div>
        <button type="submit">Add Patient to Queue</button>
      </form>
    </div>
  );
};

export default ERHome;

