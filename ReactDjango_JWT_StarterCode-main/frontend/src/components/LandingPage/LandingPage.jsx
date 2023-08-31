import React from "react";
import './LandingPage.css';
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="landing-page background-image"> {/* Add the background-image class here */}
      <h2 className="landing-title">ER Excellence: Treating Urgencies, & Valuing YOUR Time</h2>
      <div className="image-container">
        <a href="#" className="image-link">
          <img
            src="https://www.thehealthjournals.com/wp-content/uploads/2019/07/iStock-998339320.jpg"
            alt="Medical Center"
            className="landing-image"
          />
        </a>
      </div>
      <div className="button-container">
        <Link to="/register" className="register-button">
          Register as Patient
        </Link>
        <Link to="/login" className="login-button">
          Log in as Medical Staff
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

