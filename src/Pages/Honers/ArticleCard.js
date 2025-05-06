import React from 'react';
import PostButton from '../../components/Tools/Button/PostButton/PostButton';
import LineDivider from '../../components/Tools/Line/LineDivider';

const ArticleCard = ({ date, title, description }) => {
  return (
    <div className='article-sub-boxes'>
      <a className='postLink' href='#'>
        <div className='post-Details'>
          <div className='postDate'>
            <LineDivider />
            {date}
          </div>
          <h2 className='_heading-text'>{title}</h2>
          <p className='_text-honer'>{description}</p>
          <div className='_postFooter'></div>
        </div>
        <PostButton text={"Read Articles"}/>
      </a>
    </div>
  );
};

export default ArticleCard;
