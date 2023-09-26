import React, { useState } from "react";
import './MedicalSupplies.css';

const MedicalSuppliesPage = () => {
  const [supplyName, setSupplyName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplies, setSupplies] = useState([
    
    { id: 1, supplyName: "Adhesive bandages", quantity: 10 },
    { id: 2, supplyName: "Gauze", quantity: 5 },
    { id: 3, supplyName: "Hypodermic needles", quantity: 8 },
    { id: 4, supplyName: "Gloves", quantity: 11 },
    { id: 5, supplyName: "Tweezers", quantity: 12 },
    { id: 6, supplyName: "Antiseptic wipes", quantity: 14 },
    { id: 4, supplyName: "Foil blankets", quantity: 4 },
    { id: 5, supplyName: "Thread", quantity: 19 },
    { id: 6, supplyName: "Sterilized needles", quantity: 7 }
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Finding supply to update by its name
    const updatedSupplies = supplies.map((supply) => {
      if (supply.supplyName === supplyName) {
        return {
          ...supply,
          quantity: parseInt(quantity), // Updating quantity
        };
      }
      return supply;
    });

    // Update supplies list with the updated supply
    setSupplies(updatedSupplies);

    // Reset form fields after submitting
    setSupplyName("");
    setQuantity("");
  };

  return (
    <div className="medical-supplies-container">
      <h2>Medical Supplies</h2>
      <img
  src={'https://t4.ftcdn.net/jpg/03/03/86/77/240_F_303867793_FLubzhbNPUPiMdInEOXYW56n1BoZHBjM.jpg'}
  alt="Medical Supplies"
  style={{
    width: '300px', 
    height: 'auto', 
    border: '2px solid #000', 
    borderRadius: '8px', 
    
  }}
/>
      <form onSubmit={handleFormSubmit}>
        <label>
          Supply Name:
          <input
            type="text"
            name="supplyName"
            value={supplyName}
            onChange={(e) => setSupplyName(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>

      {/* Display supplies vertically */}
      <ul className="supply-list">
        {supplies.map((supply, index) => (
          <li key={index} className="supply-item">
            {supply.supplyName} - Quantity: {supply.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalSuppliesPage;


