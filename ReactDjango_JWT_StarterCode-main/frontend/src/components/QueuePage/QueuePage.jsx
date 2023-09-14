import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const QueuePage = () => {
  const [queuePatients, setQueuePatients] = useState([]);
  const [, token] = useAuth();

  useEffect(() => {
    const fetchQueuePatients = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/queues/active/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setQueuePatients(response.data);
      } catch (error) {
        console.error("Error fetching queue patients:", error);
      }
    };

    fetchQueuePatients();
  }, [token]); 
  return (
    <div>
      <h2>Queue</h2>
      {queuePatients.length > 0 ? (
        <ul>
          {queuePatients.map((queuePatient) => (
            <li key={queuePatient.id}>
              {queuePatient.first_name} {queuePatient.last_name} - Position: {queuePatient.position}
            </li>
          ))}
        </ul>
      ) : (
        <p>No patients in the queue.</p>
      )}
    </div>
  );
};

export default QueuePage;


