import React from 'react';

const PostButton = (props) => {
  return (
    <div className='_postButton'>
      <span className='material-symbols-outlined'>chat</span>
      <span className='message'>{props.text}</span>
    </div>
  );
};

export default PostButton;
