import React, { useState } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import useSticky from './../../component/hooks/useSticky.js';
import { backGroundMain, aphorodite } from './data';
import Navbar from './../../component/Navbar/Navbar';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Col, Row, Rate } from 'antd';
// import Footer from "./../../component/Footer/Footer"
import Footer from './../../component/Footer/Footer';
import { NavLink } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = () => {
  const blackHeart = './image/Home/blackHeart.png';
  const roundHeart = './image/Home/heart-1.png';
  const { isSticky, element } = useSticky();
  const [heartUrl, setHeartUrl] = useState(-1);
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
          <div ref={element} className="mainStyle">
            <Swiper autoplay={{ delay: 5000 }}  pagination={{ clickable: true }}>
              {backGroundMain.map((value, index) => {
                return (
                  <SwiperSlide
                    key={index}
                  >
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
        <section className="home" style={{ width: '100%' }}>
          <div
            style={{
              marginTop: '150px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '36px',
                marginBottom: '10px',
                fontFamily: 'Playfair Display',
              }}
            >
              Be Aphrodite Everyday
            </span>
            <span
              style={{
                fontWeight: '300',
                fontSize: '18px',
                fontFamily: 'lato',
              }}
            >
              Show the world the true beauty of a true goddess{' '}
            </span>
          </div>
          <div style={{ margin: '70px' }}>
            <Row>
              {aphorodite.map((value, index) => {
                return (
                  <Col xl={6} key={index} lg={12} md={12} sm={12} xs={24}>
                    <NavLink
                      to="/product-detail"
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#000',
                      }}
                    >
                      <div
                        style={{
                          width: '294px',
                          height: '382px',
                          backgroundImage: `url(${value.image})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                        onMouseEnter={() => setHeartUrl(index)}
                        onMouseLeave={() => setHeartUrl(-1)}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '10px 10px',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: '#fff',
                              fontSize: '14px',
                              fontWeight: '400',
                              color: 'black',
                              padding: '1px 2px',
                            }}
                          >
                            Bestseller
                          </span>
                          <img
                            alt="Vector"
                            src={heartUrl === index ? blackHeart : roundHeart}
                            style={{ width: '23px', height: '21px' }}
                          />
                        </div>
                      </div>
                      <span
                        style={{
                          fontWeight: '700',
                          fontSize: '14px',
                          marginTop: '10px',
                          fontFamily: 'Playfair Display',
                        }}
                      >
                        {value.title}
                      </span>
                      <Rate
                        disabled
                        defaultValue={5}
                        style={{ color: '#FF9592', fontSize: '15px' }}
                      />
                      <p style={{ fontWeight: 'bold' }}>{value.price}</p>
                    </NavLink>
                  </Col>
                );
              })}
            </Row>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <NavLink
                to="/store"
                className="button-main"
                style={{
                  marginTop: '50px',
                  width: '236px',
                  height: '50px',
                }}
              >
                <span
                  style={{
                    fontWeight: '700',
                    fontSize: '14px',
                    fontFamily: 'Lato',
                  }}
                >
                  VIEW ALL PRODUCT
                </span>
              </NavLink>
            </div>
          </div>
          <div>
            <Row>
              <Col xl={14} lg={14} md={14} sm={24} xs={24}>
                <img
                  src="./image/Home/Group_270.png"
                  style={{ width: '822px', height: '858px' }}
                  alt="group 270"
                />
              </Col>
              <Col xl={10} lg={10} md={10} sm={24} xs={24}>
                <div
                  style={{
                    padding: '20px',
                    marginRight: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ width: '100%', textAlign: 'right' }}>
                    <span
                      style={{
                        wordWrap: 'break-word',
                        fontSize: '120px',
                        fontWeight: '700',
                        color: '#F59393',
                        fontFamily: 'Playfair Display',
                      }}
                    >
                      Classic Beauty
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      fontWeight: '400',
                      lineHeight: '27px',
                      fontSize: '14px',
                    }}
                  >
                    <p style={{ margin: '0' }}>
                      You’re never just doing or thinking about one thing, and
                      neither should your skincare.Each one of our products are
                      easy-to-use hybrids that make your skin look naturally
                      glowing and lit-from-within
                    </p>
                    <p style={{ marginTop: '27px' }}>
                      We only formulate with the highest quality natural
                      ingredients, and believe what’s not in the formula is just
                      as important as what is. Our skincare essentials are
                      clean, cruelty-free and free of parabens, sulfates, and
                      phthalates, among others. Get to know more about us
                    </p>
                    <p style={{ marginTop: '27px' }}>
                      Our skincare essentials are clean, cruelty-free and free
                      of parabens, sulfates, and phthalates, among others.
                    </p>
                    <NavLink
                      to="/about"
                      style={{
                        marginTop: '27px',
                        textDecoration: 'underline',
                        color: '#F59393',
                      }}
                    >
                      Get to know more about us
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div
            style={{
              marginTop: '150px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '36px',
                marginBottom: '10px',
                fontFamily: 'Playfair Display',
              }}
            >
              Discover the Aphro’s Kits
            </span>
            <span
              style={{
                fontWeight: '300',
                fontSize: '18px',
                fontFamily: 'lato',
              }}
            >
              Be a real Aphrodite with the selective products by APHRO
            </span>
          </div>
          <div
            style={{
              padding: '70px 0 70px 0',
              borderBottom: '1px solid #E1DBDF',
            }}
          >
            <Row>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <img
                  style={{ width: '100%', height: 'auto' }}
                  src="./image/Home/Discover1.png"
                  alt="discover 1"
                />
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <img
                  style={{ width: '100%', height: 'auto' }}
                  src="./image/Home/Discover2.png"
                  alt="discover 2"
                />
              </Col>
            </Row>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <NavLink
                to="/kits"
                className="button-main"
                style={{
                  marginTop: '50px',
                  width: '236px',
                  height: '50px',
                }}
              >
                <span
                  style={{
                    fontWeight: '700',
                    fontSize: '14px',
                    fontFamily: 'Lato',
                  }}
                >
                  VIEW DETAILS
                </span>
              </NavLink>
            </div>
          </div>
          <div
            style={{
              padding: '70px 0 70px 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="./image/Home/beaphro.png"
              alt="beaphro"
              style={{ width: '200px', height: '200px' }}
            />
            <span style={{ fontWeight: '600', fontSize: '36px' }}>
              #BEAPHRO
            </span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: '300',
                fontFamily: 'Lato',
              }}
            >
              ship Join the APHRO’s Community to share your Reviews and
              Experience
            </span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: '300',
                fontFamily: 'Lato',
              }}
            >
              and update latest news about our Products
            </span>
            <NavLink
              to="/login"
              className="button-main"
              style={{
                marginTop: '50px',
                width: '236px',
                height: '50px',
              }}
            >
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  fontFamily: 'Lato',
                }}
              >
                SIGN IN
              </span>
            </NavLink>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Home;
