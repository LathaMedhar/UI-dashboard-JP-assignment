import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Juspay.css';
const NotFound = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dashboard'); 
  };

  return (
    <div>
      <div className="viewport">
        <div className="rectangle">
          <div className="grid-pattern"></div>
          <div className="button-container">
            <div className="button-shadow"></div>
            <button className="button" onClick={handleButtonClick}>
              ASSIGNMENT
            </button>
          </div>
          <div className="ui-developer-text">
            <div>UI DEVELOPER</div>
            <div>ASSIGNMENT</div>
          </div>
          <div className="company-text">Company</div>
          <div className="juspay-text">Juspay Technologies Private Limited</div>
          <div className="ellipse-gradient"></div>
          <div className="additional-ellipse"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;