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
import {
  backGroundKits,
  coreSeries,
  imageLeft,
  supplement,
  imageRight,
} from './data';
import Navbar from './../../component/Navbar/Navbar';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Col, Row, Menu, Dropdown } from 'antd';
import Footer from './../../component/Footer/Footer';
import { DownOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Kits = () => {
  const { isSticky, element } = useSticky();
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span style={{}}>Categories</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span>Categories 2</span>
      </Menu.Item>
    </Menu>
  );

  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
        <div ref={element} className="mainStyle">
            <Swiper autoplay={{ delay: 5000 }}  pagination={{ clickable: true }}>
              {backGroundKits.map((value, index) => {
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
        <section className="kits" style={{ width: '100%' }}>
          <div style={{ padding: '30px 70px 0 70px' }}>
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
          </div>
          <div
            style={{
              padding: '0px 70px 30px 70px',
              backgroundImage: `url(${imageLeft})`,
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
            }}
          >
            <div
              style={{
                margin: '47px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 'bold', fontSize: '36px',fontFamily:'Playfair Display' }}>
                Core Series
              </span>
              <span
                style={{
                  marginTop: '35px',
                  marginBottom: '35px',
                  fontWeight: '400',
                  fontSize: '48px',
                  fontFamily:'Playfair Display'
                }}
              >
                The Pearly Goddess
              </span>
              <span
               className="fontLato"
                style={{
                  width: '674px',
                  wordWrap: 'break-word',
                  fontWeight: '300',
                  fontSize: '18px',
                  textAlign: 'center',
                  fontFamily: 'Lato',
                }}
              >
                The Exclusive Kit yet includes simple daily products for your
                essential routine. Inspired by the classic beauty of the true
                goddess Aphrodite
              </span>
            </div>
            <div style={{ margin: '50px 0' }}>
              <Row>
                {coreSeries.map((value, index) => {
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
                          color:'#000'
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
                        ></div>
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
                      </NavLink>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div
              style={{
                marginTop: '55px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '24px',
                  position: 'relative',
                  fontFamily: 'Playfair Display'
                }}
              >
                100$
                <span
                  style={{
                    fontWeight: 'normal',
                    fontSize: '16px',
                    textDecoration: 'line-through',
                    position: 'absolute',
                    bottom: '15px',
                    marginLeft: '15px',
                    fontFamily: 'Playfair Display'
                  }}
                >
                  136$
                </span>
              </span>
              <div
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
                    fontFamily:'Lato'
                  }}
                >
                  Add to cart
                </span>
              </div>
            </div>
          </div>
          <div style={{ padding: '30px 70px', width: '100%' }}>
            <hr></hr>
          </div>
          <div
            style={{
              padding: '0 70px',
              paddingBottom:'70px',
              backgroundImage: `url(${imageRight})`,
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
          >
            <div
              style={{
                margin: '47px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 'bold', fontSize: '36px',fontFamily:'Playfair Display' }}>
                Supplement Series
              </span>
              <span
                style={{
                  marginTop: '35px',
                  marginBottom: '35px',
                  fontWeight: '400',
                  fontSize: '48px',
                  fontFamily:'Playfair Display'
                }}
              >
                The Beauty Spell
              </span>
              <span
               className="fontLato"
                style={{
                  width: '674px',
                  wordWrap: 'break-word',
                  fontWeight: '300',
                  fontSize: '18px',
                  textAlign: 'center',
                  fontFamily: 'Lato',
                }}
              >
                The Exclusive Kit yet includes simple daily products for your
                essential routine. Inspired by the classic beauty of the true
                goddess Aphrodite
              </span>
            </div>
            <div style={{ margin: '50px 0' }}>
              <Row>
                {supplement.map((value, index) => {
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
                        ></div>
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
                      </NavLink>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div
              style={{
                marginTop: '55px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '24px',
                  position: 'relative',
                  fontFamily: 'Playfair Display'
                }}
              >
                100$
                <span
                  style={{
                    fontWeight: 'normal',
                    fontSize: '16px',
                    textDecoration: 'line-through',
                    position: 'absolute',
                    bottom: '15px',
                    marginLeft: '15px',
                    fontFamily: 'Playfair Display'
                  }}
                >
                  136$
                </span>
              </span>
              <div
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
                    fontFamily:'Lato'
                  }}
                >
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kits;
