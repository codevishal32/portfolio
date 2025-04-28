import React from 'react';
import './Slider_card.styles.css';

const Slider_card = (props) => {
  return (
    <div className='slider-card' style={{ backgroundColor: props.color }}>
      <div className='slider-box'>
        <img src={props.backgroundImg} alt='Card Image' className='slider-img' />
      </div>
      <div className='text-footer'>
        {/* You can put footer text here later */}
      </div>
    </div>
  );
};

export default Slider_card;
