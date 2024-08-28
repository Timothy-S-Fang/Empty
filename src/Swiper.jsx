// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CardContainer from './CardContainer';

// Import Swiper styles
import "swiper/css"
import './Swiper.css';

function CardPack({ cards }) {
  return (
    <div className="swiper-container">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="swiperSlide">
            <CardContainer card={card} />
          </SwiperSlide>
        ))}
        <button className="swiper-close-button">Close</button>
      </Swiper>
    </div>

  );
};

export default CardPack;