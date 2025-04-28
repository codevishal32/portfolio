import React from 'react';
import AkashwaniLogo from '../../../../assests/UICard/Akashwani.png';
const  AkashwaniCard=()=> {
  return (
    <div>
        <img src={AkashwaniLogo} alt='there is teleangana map'/>
        
        <div className="ui-text">
        <h3>  Akaswani </h3>
        <p>A Web-App which predict AQI and Heatwave of teleangana local Area</p>
        </div>
    </div>
  )
}

export default AkashwaniCard;