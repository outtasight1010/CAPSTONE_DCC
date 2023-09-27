import React, { useState } from "react";
import './RoomManager.css';


const RoomManager = () => {
  const initialRooms = [
    { name: "Room A", vacant: true },
    { name: "Room B", vacant: false },
    { name: "Room C", vacant: true },
    { name: "Room D", vacant: false },
  ];

  const [rooms, setRooms] = useState(initialRooms);

  const toggleVacancy = (roomName) => {
    const updatedRooms = rooms.map((room) =>
      room.name === roomName ? { ...room, vacant: !room.vacant } : room
    );
    setRooms(updatedRooms);
  };

  return (
    <div>
      <h2 className="room-heading"> And Room Manager</h2>
      <table className="room-manager-table">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.name}>
              <td>{room.name}</td>
              <td>{room.vacant ? "Vacant" : "Occupied"}</td>
              <td>
                <button
                  className="toggle-button"
                  onClick={() => toggleVacancy(room.name)}
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomManager;

