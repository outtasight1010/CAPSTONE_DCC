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
  //const [isMounted, setIsMounted] = useState(true); // Flag to track component's mounted state

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


