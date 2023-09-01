import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const ERHome2 = () => {
  const [user, token] = useAuth();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const fetchAllPatients = async () => {
    try {
      let response = await axios.get("/api/patients/all/");
      console.log("Fetched patients:", response.data);
      setPatients(response.data);
    } catch (error) {
      console.log("Error fetching patients:", error.response.data);
    }
  };
  

  useEffect(() => {
    fetchAllPatients(); // Fetch all patients when the component mounts
  }, []);

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  return (
    <div className="container">
      <h2>Select Patient:</h2>
      <select value={selectedPatient} onChange={handlePatientChange}>
        <option value="">Select a patient</option>
        {patients.map((patient) => (
          <option key={patient.id} value={patient.id}>
            {patient.first_name} {patient.last_name}
          </option>
        ))}
      </select>
      {selectedPatient && (
        <p>You selected: {patients.find((patient) => patient.id === selectedPatient)?.first_name} {patients.find((patient) => patient.id === selectedPatient)?.last_name}</p>
      )}
    </div>
  );
};

export default ERHome2;

