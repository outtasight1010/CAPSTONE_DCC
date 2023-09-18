import React, { useState } from "react";

const MedicalSuppliesPage = () => {
  const [supplyName, setSupplyName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplies, setSupplies] = useState([]); // Local state for supplies

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a new supply object from form data
    const newSupply = {
      supplyName,
      quantity,
    };

    // Update the supplies list with the new supply
    setSupplies([...supplies, newSupply]);

    // Reset the form fields after submitting
    setSupplyName("");
    setQuantity("");
  };

  return (
    <div>
      <h2>Medical Supplies</h2>
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

      {/* Display the list of supplies */}
      <div>
        <h3>Current Supplies:</h3>
        <ul>
          {supplies.map((supply, index) => (
            <li key={index}>
              {supply.supplyName} - Quantity: {supply.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalSuppliesPage;

