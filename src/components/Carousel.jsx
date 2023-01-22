import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper';
import {slideData} from './data';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

const Carousel = () => {

  return ( 
    <section className="py-10 px-5 md:px-20" id='hot-deals'>
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
          <SwiperSlide key={obj.id} className='my-2'>
            <div className="card z-10">
              <img src={obj.image || "#"} className="rounded-t-2xl" alt="product-image" />
              <a className="btn my-2 ml-5" href={obj.link || "#"} target="_blank">Explore more...</a>
            </div>
          </SwiperSlide>
        )
      })}
      </Swiper>
    </section>
  )
}

export default Carousel