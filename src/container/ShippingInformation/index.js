import React, { useState } from 'react';
import SwiperCore, {
  Autoplay,
} from 'swiper';

import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';
import { dataShip } from './data';
import { Col, Row, Input } from 'antd';
// import Footer from "./../../component/Footer/Footer"
import Footer from './../../component/Footer/Footer';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const ShippingInfo = () => {
  const { isSticky, element } = useSticky();
  const [isOpen,setIsOpen] = useState(true)
  SwiperCore.use([Autoplay]);
  const suffix = (
    <UserOutlined
      style={{
        fontSize: 16,
        // cp: 'black',
      }}
    />
  );
  const suffix2 = (
    <DownOutlined
      style={{
        fontSize: 16,
        // color: '#FF9592',
        // cp: '#FF9592',
      }}
    />
  );

  return (
    <div>
      <Navbar sticky={isSticky} isCloseCard={() => setIsOpen(false)} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
          <div ref={element} style={{ padding: ' 0 70px 70px 70px' }}>
            <Row>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                style={{
                  paddingRight: '70px',
                  marginTop: '120px',
                  borderRight: 'solid 1px #cecece',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    src="./image/logo/logo.png"
                    alt="logo"
                    style={{ width: '155px', height: '32px' }}
                  />
                  <p
                    style={{
                      fontFamily: 'Lato',
                      marginTop: '25px',
                      marginBottom: '50px',
                    }}
                  >
                    <span style={{ color: '#FF9592' }}>Cart</span> {'>'}{' '}
                    Information {'>'} Shipping/Payment
                  </p>

                  <div
                    style={{
                      position: 'relative',
                      padding: '21px 40px',
                      border: 'solid 1px #cecece',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        padding: '0 10px',
                        position: 'absolute',
                        top: '-12px',
                        left: '40%',
                        zIndex: 1000,
                        backgroundColor: 'white',
                      }}
                    >
                      <span>Express checkout</span>
                    </div>
                    <div
                      style={{
                        width: '100$',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src="./image/shipping/zalo.png"
                        alt="zalo"
                        style={{ width: '80px', height: '47px' }}
                      />
                      <img
                        src="./image/shipping/momo.png"
                        alt="momo"
                        style={{ width: '53px', height: '35px' }}
                      />
                      <img
                        src="./image/shipping/paypal.png"
                        alt="paypal"
                        style={{ width: '85px', height: '47px' }}
                      />
                      <img
                        src="./image/shipping/air.png"
                        alt="air"
                        style={{ width: '86px', height: '29px' }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '25px',
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    <span>OR</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '25px',
                      paddingBottom: '35px',
                      borderBottom: 'solid 1px #cecece',
                      marginBottom: '15px',
                    }}
                  >
                    <NavLink to="/login" className="button-shipping">
                      <span
                        style={{
                          fontWeight: '700',
                          fontSize: '14px',
                          fontFamily: 'Lato',
                        }}
                      >
                        LOGIN
                      </span>
                      <span
                        style={{
                          fontWeight: '400',
                          fontSize: '14px',
                          fontFamily: 'Lato',
                        }}
                      >
                        for reward points
                      </span>
                    </NavLink>
                    <NavLink to="/payment-method" className="button-shipping">
                      {/* <a href="/payment-method"> */}

                      
                      <span
                        style={{
                          fontWeight: '700',
                          fontSize: '14px',
                          fontFamily: 'Lato',
                        }}
                      >
                        GUEST CHECKOUT
                      </span>
                      <span
                        style={{
                          fontWeight: '400',
                          fontSize: '14px',
                          fontFamily: 'Lato',
                        }}
                      >
                        fill out below
                      </span>
                      </NavLink>
                    {/* </div> */}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingBottom: '110px',
                      borderBottom: 'solid 1px #cecece',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                 
                        justifyContent: 'space-between',
                      }}
                    >
                      <p style={{ fontFamily: 'Lato', fontWeight: '400' }}>
                        Contact Information
                      </p>
                      <p className="fontLato" style={{ fontFamily: 'Lato', fontWeight: '300' }}>
                        Already have an account?{' '}
                        <NavLink to="/login" style={{ color: '#FF9592' }}>Log in</NavLink>
                      </p>
                    </div>
                    <Input
                      size="large"
                      style={{
                        fontFamily: 'Lato',
                        fontSize: '14px',
                        width: '100%',
                      }}
                      placeholder="Email or phone number"
                      suffix={suffix}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '20px',
                        alignItems: 'center',
                      }}
                    >
                      {/* <input
                        type="checkbox"
                        checked
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: '#565556',
                          marginRight: '15px',
                        }}
                      /> */}
                      <img
                        src="./image/shipping/checked.png"
                        alt="paypal"
                        style={{ width: '20px', height: '20px', marginRight: '15px', }}
                      />
                      <span style={{ fontFamily: 'Lato' }}>
                        Keep me up to date on news and exclusive offers
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '40px',
                      }}
                    >
                      <p style={{ fontWeight: '400', fontFamily: 'Lato' }}>
                        Shipping address
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            // fontWeight: 'bold',
                            fontSize: '14px',
                            width: '50%',
                            marginRight: '10px',
                          }}
                          placeholder="First name"
                        />
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            // fontWeight: 'bold',
                            fontSize: '14px',
                            width: '50%',
                            marginLeft: '10px',
                          }}
                          placeholder="Last name"
                        />
                      </div>
                      <div style={{ marginTop: '16px' }}>
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            // fontWeight: 'bold',
                            fontSize: '14px',
                            width: '100%',
                          }}
                          placeholder="Address"
                        />
                      </div>
                      <div style={{ marginTop: '16px' }}>
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            // fontWeight: 'bold',
                            fontSize: '14px',
                            width: '100%',
                          }}
                          placeholder="Appartment, suite, etc. (optional)"
                        />
                      </div>
                      <div style={{ marginTop: '16px' }}>
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            // fontWeight: 'bold',
                            fontSize: '14px',
                            width: '100%',
                          }}
                          placeholder="City"
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: '15px',
                        }}
                      >
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            fontSize: '14px',
                            width: '50%',
                            marginRight: '10px',
                          }}
                          placeholder="Country"
                          suffix={suffix2}
                        />
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            // fontWeight: 'bold',
                            fontSize: '14px',
                            width: '50%',
                            marginLeft: '10px',
                          }}
                          placeholder="Postal code"
                        />
                      </div>
                      <div style={{ marginTop: '16px' }}>
                        <Input
                          size="large"
                          style={{
                            fontFamily: 'Lato',
                            // fontWeight: 'bold',
                            fontSize: '14px',
                            width: '100%',
                          }}
                          placeholder="Phone number (optional)"
                        />
                      </div>
                      <div style={{ marginTop: '50px', display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems:'center' }}>
                            <NavLink to={{pathname: "/",props: isOpen}}>
                            <span
                            // onClick={() => setIsOpenCart(true)}
                              style={{
                                fontWeight: '400',
                                fontFamily: 'Lato',
                                color: '#FF9592',
                                cursor: 'pointer'
                              }}
                            >
                              
                              {'<'} Back to cart
                        </span>
                        </NavLink>
                        <NavLink
                        to="/payment-method"
                          className="button-main"
                          style={{
                            width: '142px',
                            height: '45px',
                            fontFamily:'Lato'
                          }}
                        >
                          <span
                            style={{
                              fontWeight: '700',
                              fontSize: '14px',
                              fontFamily:'Lato'
                            }}
                          >
                            Continue
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '16px',
                    }}
                  >
                    <p
                    className="fontLato"
                      style={{
                        fontWeight: '300',
                        fontFamily: 'Lato',
                        marginRight: '80px',
                        color:'#565556'
                      }}
                    >
                      © 2020 APHRO Vietnam, Inc.  rig hts reserved.{' '}
                    </p>
                    <p  className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato',color:'#565556' }}>
                      Privacy Policy
                    </p>
                    <p className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato',color:'#565556' }}>
                      Terms of Use
                    </p>
                    <p className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato',color:'#565556' }}>
                      Refund Policy
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                style={{
                  paddingLeft: '70px',
                  marginTop: '120px',
                }}
              >
                <div style={{ borderBottom: 'solid 1px #cecece' }}>
                  {dataShip.map((value, index) => {
                    return (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginBottom: '30px',
                        }}
                        key={index}
                      >
                        <div style={{ position: 'relative' }}>
                          <img
                            src={value.image}
                            style={{
                              width: '80px',
                              height: '80px',
                              marginRight: '30px',
                            }}
                            alt="product"
                          />
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '18px',
                              backgroundColor: 'grey',
                              position: 'absolute',
                              right: '20px',
                              top: '-8px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <span style={{ color: '#cecece' }}>1</span>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <p
                              style={{
                                fontWeight: '700',
                                fontFamily: 'Lato',
                                fontSize: '14px',
                              }}
                            >
                              {value.title}
                            </p>
                            <p
                            className="fontLato"
                              style={{
                                fontFamily: 'Lato',
                                fontWeight: '300',
                                fontSize: '14px',
                              }}
                            >
                              50ml
                            </p>
                          </div>
                          <p
                            style={{
                              fontFamily: 'Lato',
                              fontWeight: '700',
                              fontSize: '14px',
                            }}
                          >
                            $ 34
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '21px',
                    paddingBottom:'22px',
                    borderBottom: 'solid 1px #cecece'
                  }}
                >
                  <Input
                    size="large"
                    style={{
                      fontFamily: 'Lato',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      width: '100%',
                      marginRight:'18px'
                    }}
                    placeholder="Gift card or discount code"
                  />
                  <div
                  className="button-main"
                    style={{
                      width: '142px',
                      height: '45px',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: '700',
                        fontSize: '14px',
                        fontFamily:'Lato'
                      }}
                    >
                      Apply
                    </span>
                  </div>
                </div>
                <div style={{marginTop: '25px',display: 'flex',flexDirection: 'column',paddingBottom:'25px',borderBottom: 'solid 1px #cecece'}}>
                  <div style={{display: 'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <p style={{fontWeight:'400',fontFamily:'Lato'}}>Subtotal</p>
                    <p style={{fontWeight:'700',fontFamily:'Lato'}}>$ 102</p>
                  </div>
                  <div style={{display: 'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}>
                    <p style={{fontWeight:'400',fontFamily:'Lato'}}>Shipping</p>
                    <p className="fontLato" style={{fontWeight:'300',fontFamily:'Lato'}}>calculate at next step</p>
                  </div>
                  
                </div>
                <div style={{display: 'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'25px'}}>
                  <p style={{fontWeight:'400',fontFamily:'Lato'}}>Total</p>
                    <p style={{fontWeight:'700',fontFamily:'Lato'}}>$ 102</p>
                  </div>
              </Col>
            </Row>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingInfo;
