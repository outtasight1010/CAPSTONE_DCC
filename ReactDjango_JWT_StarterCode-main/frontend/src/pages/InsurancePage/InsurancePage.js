import React, { useState } from "react";

const InsurancePage = () => {
  const [insuranceName, setInsuranceName] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [noInsurance, setNoInsurance] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g. send data to the backend
    console.log("Insurance Name:", insuranceName);
    console.log("Policy Number:", policyNumber);
    console.log("No Insurance:", noInsurance);
    // Reset form fields after submission
    setInsuranceName("");
    setPolicyNumber("");
    setNoInsurance(false);
  };

  return (
    <div className="container">
      <h2>Add Insurance Credentials</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="insuranceName">Insurance Name:</label>
          <input
            type="text"
            id="insuranceName"
            value={insuranceName}
            onChange={(e) => setInsuranceName(e.target.value)}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="policyNumber">Policy Number:</label>
          <input
            type="text"
            id="policyNumber"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            className="form-control"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={noInsurance}
              onChange={(e) => setNoInsurance(e.target.checked)}
            />
            No Insurance
          </label>
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InsurancePage;
