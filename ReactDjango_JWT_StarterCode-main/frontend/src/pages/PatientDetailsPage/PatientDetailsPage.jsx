import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './PatientDetailsPage.css';

const PatientDetailsPage = () => { 

  const { patientId } = useParams();
  console.log("Patient ID:", patientId);
  const [, token] = useAuth();
  console.log("Token:", token);
  const [patientDetails, setPatientDetails] = useState("");
 

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/patients/details/${patientId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPatientDetails(response.data);
      } catch (error) {
        console.log("Error fetching patient details:", error.response);
      }
    };
    fetchPatientDetails();
  }, [patientId, token]);
  
  return (
    <div className="patient-details-container">
      <h2 className="patient-details-heading">
      <span className="cool-text">Patient</span> Details
    </h2>
      {patientDetails ? (
        <div className="patient-details">
          <p><strong>First Name:</strong> {patientDetails.first_name}</p>
          <p><strong>Last Name:</strong> {patientDetails.last_name}</p>
          <p><strong>Contact Number:</strong> {patientDetails.contact_number}</p>
          <p><strong>Medical History:</strong> {patientDetails.medical_history}</p>
          <p><strong>Joined Queue:</strong> {patientDetails.joined_queue ? "Yes" : "No"}</p>
          <p><strong>Queue Position:</strong> {patientDetails.queue_position}</p>
          <p><strong>Estimated Wait Time:</strong> {patientDetails.estimated_wait_time}</p>
          <p><strong>Pain Level: 1-5:</strong> {patientDetails.pain_level}</p>
          <p><strong>Reason for Visit:</strong> {patientDetails.visit_reason}</p>
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}
    </div>
  );
  
};

  export default PatientDetailsPage;


