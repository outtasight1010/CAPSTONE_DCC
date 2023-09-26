import React, { useContext, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css"; 
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
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="login-input"
          />
        </label>
        <label className="login-label">
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="login-input"
          />
        </label>
        {isServerError ? (
          <p className="login-error">Login failed, incorrect credentials!</p>
        ) : null}
        <button onClick={handleLogin} className="login-button">
          Login!
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

