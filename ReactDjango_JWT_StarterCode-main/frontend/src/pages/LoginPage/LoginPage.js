import React, { useContext, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css"; // Import the stylesheet
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);
  

  const handleLogin = async () => {
    const response = await loginUser(formData); 
    if (response && response.token) {
      // Storing the token in localStorage
      localStorage.setItem("token", response.token);
      // Other actions upon successful login
    } else {
      reset();
    }
  };


  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <button onClick={handleLogin}>Login!</button>
      </form>
    </div>
  );
};

export default LoginPage;

