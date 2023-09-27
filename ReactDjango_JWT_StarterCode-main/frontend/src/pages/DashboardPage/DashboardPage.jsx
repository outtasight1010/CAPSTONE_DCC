import React, { useState } from "react";
import { Link } from "react-router-dom";
import './DashboardPage.css';
import RoomManager from "../../components/RoomManager/RoomManager";

const DashboardPage = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [dailyQuote, setDailyQuote] = useState('');


  const quotes = [
    "Never ever ever EVER give up.",
    "Every passing minute is another chance to turn it all around.",
    "Let's make it a great day.",
    "Keep pushing forward.",
    "You are stronger than you think.",
    "We are all in this together.",
    
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const handleDailyQuoteClick = () => {
    const quote = getRandomQuote();
    setDailyQuote(quote);
    setShowQuote(true);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="welcome-heading">Welcome to Your Dashboard</h1>
        <RoomManager/>
        <p>What would you like to do?</p>
        <div className="dashboard-actions">
          <Link to="/select-patient">In Holding</Link>
          <Link to="/queue">Queue</Link>
          <Link to="/add-patient">Processed</Link>
          <Link to="/staff-on-duty">Staff on Duty</Link>
          <Link to="/medical-supplies">Medical Supplies</Link>
          <button onClick={handleDailyQuoteClick}>Daily Quote</button>
        </div>
        {showQuote && (
          <div className="quote-container">
            <blockquote>
              <p>{dailyQuote}</p>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

