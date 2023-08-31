import React, { useState } from "react";

const InsurancePage = () => {
  const [insuranceData, setInsuranceData] = useState({
    insuranceProvider: "",
    policyNumber: "",
    // Other insurance fields
  });

  const handleInsuranceSubmit = (e) => {
    e.preventDefault();
    // Handle insurance submission here
  };

  return (
    <div>
      <h2>Add Insurance Credentials</h2>
      <form onSubmit={handleInsuranceSubmit}>
        {/* Insurance form fields */}
        <button type="submit">Submit Insurance</button>
      </form>
    </div>
  );
};

export default InsurancePage;
