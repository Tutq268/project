import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';
import { dataShip, data1 } from './data';
import { Col, Row, Table, Input } from 'antd';
// import Footer from "./../../component/Footer/Footer"
import Footer from './../../component/Footer/Footer';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const PaymentMethod = () => {
  const columns = [
    {
      dataIndex: 'contact',
      key: 'contact',
      render: (item) => {
        return (
          <div>
            <p style={{ fontWeight: '300', fontFamily: 'Lato' }}>{item}</p>
          </div>
        );
      },
    },
    {
      dataIndex: 'order',
      key: 'order',
      render: (item) => {
        return (
          <div style={{ padding: '0 20px' }}>
            <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>{item}</p>
          </div>
        );
      },
    },
    {
      dataIndex: 'status',
      key: 'status',
      render: (item) => {
        return (
          <p
            style={{
              fontWeight: '300',
              fontFamily: 'Lato',
              textDecoration: 'underline',
            }}
          >
            {item}
          </p>
        );
      },
    },
  ];
  const { isSticky, element } = useSticky();
  SwiperCore.use([Autoplay]);
  const suffix = (
    <UserOutlined
      style={{
        fontSize: 16,
        cp: 'black',
      }}
    />
  );
  const suffix2 = (
    <DownOutlined
      style={{
        fontSize: 16,
        color: '#FF9592',
        cp: '#FF9592',
      }}
    />
  );
  return (
    <div>
      <Navbar sticky={isSticky} />
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
                    }}
                  >
                    <span style={{ color: '#FF9592' }}>
                      Cart {'>'} Information{' '}
                    </span>{' '}
                    {'>'} {'>'} Shipping/Payment
                  </p>

                  <div style={{ width: '100%',border: 'solid 1px #cecece',backgroundColor: '#fff' }}>
                    <Table
                      columns={columns}
                      dataSource={data1}
                      pagination={false}
                      rowKey={(record) => record.id}
                      style={{ width: '100%' }}
                    />
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
                        flexDirection: 'column',
                        marginTop: '40px',
                      }}
                    >
                      <span
                        style={{
                          fontWeight: '400',
                          fontFamily: 'Lato',
                          marginBottom: '10px',
                        }}
                      >
                        Shipping address
                      </span>
                      <span style={{ fontFamily: 'Lato', fontWeight: '300' }}>
                        Keep me up to date on news and exclusive offers
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          backgroundColor: '#fff',
                          padding: '20px',
                          border: 'solid 1px #e3e3e3',
                          marginTop: '20px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src="./image/shipping/noncheck.png"
                            alt="don't check"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <span
                            style={{
                              fontFamily: 'Lato',
                              fontWeight: '400',
                              marginLeft: '16px',
                            }}
                          >
                            Credit card
                          </span>
                        </div>
                        <div style={{ marginTop: '16px' }}>
                          <Input
                            size="large"
                            style={{
                              fontFamily: 'Lato',
                              fontSize: '14px',
                              width: '100%',
                            }}
                            placeholder="Card number"
                          />
                        </div>
                        <div style={{ marginTop: '16px' }}>
                          <Input
                            size="large"
                            style={{
                              fontFamily: 'Lato',
                              fontSize: '14px',
                              width: '100%',
                            }}
                            placeholder="Name on card"
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
                            placeholder="Expiration date"
                          />
                          <Input
                            size="large"
                            style={{
                              fontFamily: 'Lato',
                              fontSize: '14px',
                              width: '50%',
                              marginLeft: '10px',
                            }}
                            placeholder="Sercurity code"
                          />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: '15px',
                          }}
                        >
                          <img
                            src="./image/shipping/noncheck.png"
                            alt="don't check"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <span
                            style={{
                              fontFamily: 'Lato',
                              fontWeight: '400',
                              marginLeft: '16px',
                            }}
                          >
                            Paypal
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: '15px',
                          }}
                        >
                          <img
                            src="./image/shipping/noncheck.png"
                            alt="don't check"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <span
                            style={{
                              fontFamily: 'Lato',
                              fontWeight: '400',
                              marginLeft: '16px',
                            }}
                          >
                            Amazon pay
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: '30px',
                          marginLeft: '30px',
                        }}
                      >
                        <img
                          src="./image/shipping/checked.png"
                          alt="don't check"
                          style={{ width: '20px', height: '20px' }}
                        />
                        <span
                          style={{
                            fontFamily: 'Lato',
                            fontWeight: '400',
                            marginLeft: '16px',
                          }}
                        >
                          Save my information for the next checkout
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: '30px',
                          width: '100%',
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: '#fff',
                          border: 'solid 1px #e3e3e3',
                          paddingLeft: '10px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src="./image/shipping/checked.png"
                            alt="don't check"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <span
                            style={{
                              fontFamily: 'Lato',
                              fontWeight: '400',
                              marginLeft: '16px',
                            }}
                          >
                            Cash on delivery
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: '50px',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems:'center'
                        }}
                      >
                        <span
                          style={{
                            fontWeight: '400',
                            fontFamily: 'Lato',
                            color: '#FF9592',
                          }}
                        >
                          {'<'} Back to card
                        </span>
                        <NavLink
                        to="/order-status"
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
                            Paynơw
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
                      style={{
                        fontWeight: '300',
                        fontFamily: 'Lato',
                        marginRight: '80px',
                      }}
                    >
                      © 2020 APHRO Vietnam, Inc. All rig hts reserved.{' '}
                    </p>
                    <p style={{ fontWeight: '300', fontFamily: 'Lato' }}>
                      Privacy Policy
                    </p>
                    <p style={{ fontWeight: '300', fontFamily: 'Lato' }}>
                      Terms of Use
                    </p>
                    <p style={{ fontWeight: '300', fontFamily: 'Lato' }}>
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
                    paddingBottom: '22px',
                    borderBottom: 'solid 1px #cecece',
                  }}
                >
                  <Input
                    size="large"
                    style={{
                      fontFamily: 'Lato',
                      fontSize: '14px',
                      width: '100%',
                      marginRight: '18px',
                    }}
                    placeholder="Gift card or discount code"
                  />
                  <div
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
                      Apply
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '25px',
                    borderBottom: 'solid 1px #cecece',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ fontWeight: '400', fontFamily: 'Lato' }}>
                      Subtotal
                    </p>
                    <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>
                      $ 102
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <p style={{ fontWeight: '400', fontFamily: 'Lato' }}>
                      Shipping
                    </p>
                    <p style={{ fontWeight: '300', fontFamily: 'Lato' }}>
                      calculate at next step
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '25px',
                  }}
                >
                  <p style={{ fontWeight: '400', fontFamily: 'Lato' }}>Total</p>
                  <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>$ 102</p>
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

export default PaymentMethod;
