import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './QueuePage.css';

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
    <div className="queue-page-container">
      <h2 className="queue-header">Queue</h2>
      {queuePatients.length > 0 ? (
        <ul className="queue-list"> 
          {queuePatients.map((queue) => (
            <li key={queue.id} className="queue-item"> 
              <ul className="queue-patient-info"> 
                {queue.queue_entries.map((queueEntry, index) => (
                  <li key={index}>
                    First Name: {queueEntry.patient.first_name}<br />
                    Last Name: {queueEntry.patient.last_name}<br />
                    Queue Position: {queueEntry.position}
                  </li>
                ))}
              </ul>
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









