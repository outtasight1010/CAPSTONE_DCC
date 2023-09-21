import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link, useNavigate } from "react-router-dom";
import './RegisterPage.css';

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",         // Add Address field
    phoneNumber: "",     // Add Phone Number field
    painLevel: "",       // Add Pain Level field
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Registration logic (e.g., API request to register the user)
      // After successful registration:
      await registerUser(formData);
      navigate("/patient-dashboard");
    } catch (error) {
      console.error(error);
      // Handle registration errors, if any
    }
  };

  const [formData, handleInputChange] = useCustomForm(
    defaultValues
  );

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pain Level (1-5):
          <input
            type="number"
            name="painLevel"
            value={formData.painLevel}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button type="submit">Register!</button>
      </form>
      
    </div>
  );
};

export default RegisterPage;



