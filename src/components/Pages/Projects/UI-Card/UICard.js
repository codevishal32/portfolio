import React from "react";
import UIimg from '../../../../assests/UICard/Flipkart-grid.png';
import "./UICard.styles.css";


const UICard = () => {
  return (
    <div className="ui-box">
      <img src={UIimg}/>
      
      <div className="ui-text">
        <h3>Scraper</h3>
        <p>A Application which show the fashions trends by using Social Media data.</p>
      </div>
    </div>
  );
};

export default UICard;
