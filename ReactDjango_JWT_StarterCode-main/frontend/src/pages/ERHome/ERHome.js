import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { faHeartMusicCameraBolt, faHeartPulse, faHome, faPeopleArrows, faPeopleLine, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <FontAwesomeIcon
        icon={faHeartPulse}
        size="lg"
        style={{ color: "red", marginBottom: "10px", marginRight: "10px" }} // Adding marginRight for spacing
        />
         <FontAwesomeIcon
        icon={faHeartPulse}
        size="lg"
        style={{ color: "red", marginBottom: "10px", marginRight: "10px",  }} // Adding marginRight for spacing
       />
       <FontAwesomeIcon
        icon={faHeartPulse}
        size="lg"
        style={{ color: "red", marginBottom: "10px" }} // Adding marginRight for spacing
       />
      <h1 style={{ color: "almond", fontSize: "14px" }}>Welcome, {user.username}!</h1>
      <h2>Patients:</h2>
      <FontAwesomeIcon
        icon={faPeopleArrows}
        size="sm"
        style={{ color: "blue", marginTop: "5px" }} // Adding marginRight for spacing
       />
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
