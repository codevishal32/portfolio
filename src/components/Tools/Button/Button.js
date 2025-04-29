import React from 'react'
import './Button.styles.css';
const Button=(props)=> {
  return (
        <div className='button'>
            <a className='button-link' href={props.link} >
                <span className='btn-text'>{props.text}</span>
                <i className='fas fa-arrow-right btn-svg'></i>
            </a>
        </div>
  )
}

export default Button;