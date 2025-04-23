import React, { useState, useEffect } from 'react';
import './TypewriterText.styles.css';

const TypewriterText = (props) => {
  const message = props.message;
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100; // Typing and deleting speed

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && index < message.length) {
        setText(prev => prev + message.charAt(index));
        setIndex(prev => prev + 1);
      } else if (isDeleting && index > 0) {
        setText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      } else if (!isDeleting && index === message.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (

      <h1 className="typewriter">{text}<span className="cursor">|</span></h1>

  );
};

export default TypewriterText;
