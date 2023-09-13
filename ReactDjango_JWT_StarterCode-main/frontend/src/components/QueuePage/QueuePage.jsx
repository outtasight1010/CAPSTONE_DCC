import React, { useState, useEffect } from "react";
import axios from "axios";

const QueuePage = () => {
  const [queuePatients, setQueuePatients] = useState([]);

  useEffect(() => {
    // Function to fetch patients in the active queue
    const fetchQueuePatients = async () => {
      try {
        // Fetch the active queue first
        const activeQueueResponse = await axios.get("http://your-api-url/get-active-queue");
        const activeQueue = activeQueueResponse.data;

        // If an active queue is found, fetch its patients
        if (activeQueue) {
          const queuePatientsResponse = await axios.get(`http://your-api-url/queue-entries/${activeQueue.id}`);
          setQueuePatients(queuePatientsResponse.data);
        } else {
          setQueuePatients([]);
        }
      } catch (error) {
        console.error("Error fetching queue patients:", error);
      }
    };

    // Call the fetchQueuePatients function when the component mounts
    fetchQueuePatients();
  }, []);

  return (
    <div>
      <h2>Queue</h2>
      <ul>
        {queuePatients.map((queueEntry) => (
          <li key={queueEntry.id}>
            {queueEntry.patient.first_name} {queueEntry.patient.last_name} - Position: {queueEntry.position}
          </li>
        ))}
      </ul>
      {/* Add additional content or functionality as needed */}
    </div>
  );
};

export default QueuePage;
