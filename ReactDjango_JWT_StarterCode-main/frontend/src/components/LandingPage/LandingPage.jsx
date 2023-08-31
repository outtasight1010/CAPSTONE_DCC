import React from "react";
import './LandingPage.css';


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
    </div>
  )
};

export default LandingPage;


