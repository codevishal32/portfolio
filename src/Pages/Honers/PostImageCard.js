import React from 'react';
import honersImg from '../../assests/ImgCard/modern-styling-in-react-banner.jpg'; // make sure the image path is correct

import './PostImage.styles.css';
import ArticleCard from './ArticleCard';


const PostImageCard= () => {
  return (
    <div className="articleCard" style={{ backgroundImage: `url(${honersImg})` }}>
      <span className="featuredTag">Featured</span>
      <div className="overlay" />
      <div className='postImgText'>
        <ArticleCard 
            date="06 May 2025"
            title="Virtual X:how I built this site"
            description="I originally built thi deepfake detection site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process."
            />
         </div>
    </div>
  );
};

export default PostImageCard;
