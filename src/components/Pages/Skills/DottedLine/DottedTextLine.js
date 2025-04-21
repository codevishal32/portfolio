
import React from 'react'
import './DottedTextLine.styles.css';
const DottedTextLine=(props)=> {
  return (
    <div className='dotted-line-size'>
        <div className="dotted-line">
            <span className="dotted-text skill-types">{props.text}</span>
        </div>
    </div>
  )
}

export default DottedTextLine;