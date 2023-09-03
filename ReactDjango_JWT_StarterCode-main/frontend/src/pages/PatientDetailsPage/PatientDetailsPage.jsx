import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './PatientDetailsPage.css';

const PatientDetailsPage = () => {
  const { patientId } = useParams();
  console.log("Patient ID:", patientId);
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
        try {
          const token = localStorage.getItem("token");
          console.log("Retrieved token:", token);

          // Log the token to the console
          console.log("Token:", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
          const response = await axios.get(`http://127.0.0.1:8000/api/patients/details/${patientId}/`);
          setPatientDetails(response.data);
          console.log("Response:", response);
        } catch (error) {
          console.log("Error fetching patient details:", error.response.data);
        }
      };
      

    fetchPatientDetails();
  }, [patientId]);



  return (
    <div className="container">
      <h2>Patient Details</h2>
      {patientDetails ? (
        <div>
          <p>First Name: {patientDetails.first_name}</p>
          <p>Last Name: {patientDetails.last_name}</p>
          <p>Contact Number: {patientDetails.contact_number}</p>
          <p>Medical History: {patientDetails.medical_history}</p>
          <p>Joined Queue: {patientDetails.joined_queue ? "Yes" : "No"}</p>
          <p>Queue Position: {patientDetails.queue_position}</p>
          <p>Estimated Wait Time: {patientDetails.estimated_wait_time}</p>
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}
    </div>
  );
};

export default PatientDetailsPage;


