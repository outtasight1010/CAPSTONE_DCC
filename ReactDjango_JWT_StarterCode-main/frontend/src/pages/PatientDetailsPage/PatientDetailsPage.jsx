import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientDetailsPage = () => {
  const { patientId } = useParams(); 
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    // Fetching patient details using the patient ID
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`/api/patients/${patientId}/details`);
        setPatientDetails(response.data);
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
