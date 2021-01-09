import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import useSticky from './../../component/hooks/useSticky.js';
import { backGroundMain, aphorodite } from './../Home/data';
import Navbar from './../../component/Navbar/Navbar';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Col, Row, Rate } from 'antd';
// import Footer from "./../../component/Footer/Footer"
import Footer from './../../component/Footer/Footer'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const About = () =>{
    const { isSticky, element } = useSticky();
  SwiperCore.use([Autoplay]);
    return(
        <div>
        <Navbar sticky={isSticky} />
        <main style={{ backgroundColor: '#FAFAFA' }}>
          <section className="welcome">
            <div ref={element}>
              <Swiper autoplay={{ delay: 5000 }}>
                {backGroundMain.map((value, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div
                        style={{
                          height: '570px',
                          backgroundImage: `url(${value.image})`,
                          width: '100%',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
          <section className="About" style={{ width: '100%' }}></section>
        </main>
      </div>
    )
}

export default About