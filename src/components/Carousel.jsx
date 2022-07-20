import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import {slideData} from './data';

const Carousel = () => {

  return ( 
    <section className="my-5" id='hot-deals'>
      <h2 className="text-2xl text-center font-bold">Hot Deals</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        effect="coverflow"
        pagination={{ clickable: true }}
      >
        {slideData.map(obj => {
        return (
          <SwiperSlide key={obj.id} className='px-3 pb-6'>
            <div className="card mb-3">
              <img src={obj.image || "#"} alt="product-image" />
              <a className="btn w-40 text-center" href={obj.link || "#"} target="_blank">Explore</a>
            </div>
          </SwiperSlide>
        )
      })}
      </Swiper>
    </section>
  )
}

export default Carousel