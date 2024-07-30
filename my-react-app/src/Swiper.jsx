// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CardContainer from './CardContainer';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><CardContainer children={"Hello"} title={"Legendary"}/></SwiperSlide>
      <SwiperSlide><CardContainer children={"Hello"} title={"Legendary"}/></SwiperSlide>
      <SwiperSlide><CardContainer children={"Hello"} title={"Legendary"}/></SwiperSlide>
      <SwiperSlide><CardContainer children={"Hello"} title={"Legendary"}/></SwiperSlide>
      
    </Swiper>
  );
};