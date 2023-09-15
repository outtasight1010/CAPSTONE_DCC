// MedicalSuppliesPage.jsx
import React, { useState } from "react";

const MedicalSuppliesPage = () => {
  const [supplyName, setSupplyName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // You can send the form data to the server for updating here
    const formData = {
      supplyName,
      quantity,
    };

    // Reset the form fields after submitting
    setSupplyName("");
    setQuantity("");

    // I'm deciding whether to fetch supplies from the API
    // If, I DO decide to use API:
    // axios.post("http://127.0.0.1:8000/api/update-medical-supplies/", formData)
    //   .then((response) => {
    //     // Handle the response if needed
    //   })
    //   .catch((error) => {
    //     console.error("Error updating medical supplies:", error);
    //   });
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
    </div>
  );
};

export default MedicalSuppliesPage;
