import React from 'react';
import ArticleSection from './ArticleSection';
import ArticleCard from './ArticleCard';
import honersImg from '../../assests/ImgCard/modern-styling-in-react-banner.jpg';
import './Honer.styles.css';
import PostImageCard from './PostImageCard';
const Honers=() =>{
  return (
    <section className='honers'>
        <div className='honers-container'>
        <ArticleSection />
        <PostImageCard />
      </div>

    </section>
  )
}

export default Honers;