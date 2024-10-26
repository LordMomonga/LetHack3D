// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

export default function CategoryCourse() {

  return (
    <div className='w-screen md:w-auto px-5 py-3 md:p-10 mb-3 !-mx-6'>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        className="drink-card h-fit custom-1480px:justify-center overflow-x-hidden  rounded-full"
      >
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 font-semibold text-white capitalize p-1 whitespace-nowrap opacity-100 hover:opacity-100">
            sciences
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Mécatronique
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Télécommunications
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Chimie
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Robotique
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Biotechnologie
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            IT
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Biologie
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Génie civile
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='!w-fit'>
          <NavLink to="yaounde" className="block bg-primary rounded-2xl px-4 text-white capitalize p-1 whitespace-nowrap opacity-70 hover:opacity-100">
            Electronique
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};