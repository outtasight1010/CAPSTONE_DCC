import React, { useState } from "react";
import axios from "axios";

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const response = await axios.post(
        "http://127.0.0.1:8000/api/patients/register/",
        formData
      );

      // Handle success and reset form data if needed
      console.log("Patient added:", response.data);
      setFormData({
        first_name: "",
        last_name: "",
      });
    } catch (error) {
      console.error("Error adding patient:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </label>

    
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
