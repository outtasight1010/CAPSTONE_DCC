import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import './ERHome.css';

const HomePage = () => {
  const [user, token] = useAuth();
  const [patients, setPatients] = useState([]);
  const [queues, setQueues] = useState([]);

  useEffect(() => {
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
        setQueues(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchPatients();
    fetchActiveQueue();
  }, [token]);

  return (
    <div style={{ backgroundColor: "azure", padding: "20px" }}>
  <h1 style={{ color: "almond", fontSize: "14px" }}>Welcome, {user.username}!</h1>
      <h2>Patients:</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.first_name} {patient.last_name}</li>
        ))}
      </ul>
      <h2>Active Queue:</h2>
      <p>{queues.name}</p>
    </div>
  );
};

export default HomePage;
