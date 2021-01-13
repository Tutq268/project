import React,{useState} from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import useSticky from './../../component/hooks/useSticky.js';
import { backGroundStore, product } from './data';
import Navbar from './../../component/Navbar/Navbar';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Col, Row, Rate, Menu, Dropdown } from 'antd';
// import Footer from "./../../component/Footer/Footer"
import Footer from './../../component/Footer/Footer';
import { DownOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Store = () => {
  const blackHeart = './image/Home/blackHeart.png';
  const roundHeart = './image/Home/heart-1.png';
  const [heartUrl, setHeartUrl] = useState(-1);

  const { isSticky, element } = useSticky();
  SwiperCore.use([Autoplay]);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span style={{}}>Categories</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span>Cleanser</span>
      </Menu.Item>
      <Menu.Item key="2">
        <span>Remover</span>
      </Menu.Item>
      <Menu.Item key="3">
        <span>Cl</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
        <div ref={element} className="mainStyle">
            <Swiper autoplay={{ delay: 5000 }}  pagination={{ clickable: true }}>
              {backGroundStore.map((value, index) => {
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
        <section
          className="store"
          style={{ width: '100%', padding: '30px 70px' }}
        >
          <div style={{ margin: '0 50px' }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100px',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    //   fontFamily: 'Lato',
                    fontSize: '14px',
                  }}
                >
                  Categories
                </span>
                <DownOutlined
                  style={{
                    color: '#FF9592',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                />
              </div>
            </Dropdown>
          </div>
          <div style={{ margin: '50px 0' }}>
            <Row>
              {product.map((value, index) => {
                return (
                  <Col key={index} xl={6} lg={12} md={12} sm={12} xs={24}>
                    <NavLink
                      to="/product-detail"
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#000'
                      }}
                    >
                      <div
                      className="productStyle"
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
                            justifyContent: 'flex-end',
                          }}
                        >
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
                          fontFamily:'Playfair Display'
                        }}
                      >
                        {value.title}
                      </span>
                      <Rate
                        disabled
                        defaultValue={5}
                        style={{ color: '#FF9592', fontSize: '15px' }}
                      />
                      <p style={{ fontWeight: '700', fontFamily: 'Playfair Display' }}>{value.price}</p>
                    </NavLink>
                  </Col>
                );
              })}
            </Row>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
