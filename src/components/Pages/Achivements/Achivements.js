import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './Achivements.styles.css';
import Slider_card from './Slider_card';
import Titles from '../Titles/Titles';
import Achivement1 from "../../../assests/Acheivments/Achivement1.png";
import Achivement2 from "../../../assests/Acheivments/Achivement2.png";
import Achivement3 from "../../../assests/Acheivments/Achivement3.png";
import Achivement4 from "../../../assests/Acheivments/Achivement4.png";

const Achivements = () => {
  const items = [
    {
      name: "Vision Verse",
      image: Achivement1,
      color: "red"
    },
    {
      name: "Telangana AI Mission",
      image: Achivement2,
      color: "yellow"
    },
    {
      name: "Flipkart Grid",
      image: Achivement3,
      color: "blue"
    },
    {
      name: "Leetcode",
      image: Achivement4,
      color: "grey"
    }
  ];

  return (
    <section className='achievements'>
      <div className='achievements-container'>
        <Titles 
          heading="Achievements" 
          description="Achievement is not the end goal; it’s the momentum that fuels your next victory."
        />
        <div className="achievements-slider-wrapper">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {           // Mobile
                slidesPerView: 1,
              },
              768: {        // Tablet
                slidesPerView: 2,
              },
              1024: {       // Laptop/Desktop
                slidesPerView: 3,
              },
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <Slider_card
                  backgroundImg={item.image}
                  color={item.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
