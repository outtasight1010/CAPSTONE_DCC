import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './ERHome2.css';


const ERHome2 = () => {
  const [user, token] = useAuth();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const fetchAllPatients = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/patients/all/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setPatients(response.data);
    } catch (error) {
      console.log("Error fetching patients:", error.response.data);
    }
  };
  
  
  

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    fetchAllPatients();
  }, [token]);
  

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
    toast.success("Patient is patiently waiting. Make it a great day!");
  };

  return (
    <div className="dropdown-container">
      <h2 className="select-patient-heading">Select Patient:</h2>
      <select className="custom-dropdown" value={selectedPatient} onChange={handlePatientChange}>
        <option value="">Select a patient</option>
        {patients.map((patient) => (
          <option key={patient.id} value={patient.id}>
            {patient.first_name} {patient.last_name}
          </option>
        ))}
      </select>
      {selectedPatient && (
        <Link to={`/patient/${selectedPatient}`}>
        View Patient Details
      </Link>
      )}
    </div>
  );
};

export default ERHome2;

