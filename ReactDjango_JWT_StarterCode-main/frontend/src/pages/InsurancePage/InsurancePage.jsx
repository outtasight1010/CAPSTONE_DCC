import React, { useState } from "react";
import "./InsurancePage.css";

const InsurancePage = () => {
  const [insuranceName, setInsuranceName] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [noInsurance, setNoInsurance] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the backend
    console.log("Insurance Name:", insuranceName);
    console.log("Policy Number:", policyNumber);
    console.log("No Insurance:", noInsurance);
    // Reset form fields after submission
    setInsuranceName("");
    setPolicyNumber("");
    setNoInsurance(false);
    // Set submitted to true to display the "Thank you" message
    setSubmitted(true);
  };

  return (
    <div className="insurance-container">
      <h2>Add Insurance Credentials</h2>
      {submitted ? (
        <p>Thank you for submitting your insurance information!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="insuranceName">Insurance Name:</label>
            <input
              type="text"
              id="insuranceName"
              value={insuranceName}
              onChange={(e) => setInsuranceName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="policyNumber">Policy Number:</label>
            <input
              type="text"
              id="policyNumber"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
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
      )}
    </div>
  );
};

export default InsurancePage;




