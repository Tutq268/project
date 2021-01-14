import React from 'react';

import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';
import { dataShip,data1,data2 } from './data';
import { Col, Row, Rate, Input,Table } from 'antd';
// import Footer from "./../../component/Footer/Footer"
import Footer from './../../component/Footer/Footer';
import { NavLink } from 'react-router-dom';

const OrderStatus = () => {
    const columns1 = [
        {
          dataIndex: 'contact',
          key: 'contact',
          render: (item) => {
            return (
              <div>
                <p className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato',color:'#565556' }}>{item}</p>
              </div>
            );
          },
        },
        {
          dataIndex: 'address',
          key: 'address',
          render: (item) => {
            return (
              <div style={{ padding: '0 20px' }}>
                <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>{item}</p>
              </div>
            );
          },
        }
      ];
      const columns2 = [
        {
          dataIndex: 'order',
          key: 'order',
          render: (item) => {
            return (
              <div>
                <p className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato',color:'#565556' }}>{item}</p>
              </div>
            );
          },
        },
        {
          dataIndex: 'status',
          key: 'status',
          render: (item) => {
            return (
              <div>
                <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>{item}</p>
              </div>
            );
          },
        },
        {
          dataIndex: 'time',
          key: 'time',
          render: (item) => {
            return (
              <p
              className="fontLato"
                style={{
                  fontWeight: '300',
                  fontFamily: 'Lato',
                  textAlign: 'right',
                  color:'#565556'
                }}
              >
                {item}
              </p>
            );
          },
        },
      ];
  const { isSticky, element } = useSticky();
  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
          <div ref={element}>
            <div
              style={{
                padding: '93px 26%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="./image/shipping/tickShip.png"
                alt="tick ship"
                style={{ width: '150px', height: '150px',marginTop:'93px' }}
              />
              <p
                style={{
                  marginTop: '30px',
                  marginBottom: '30px',
                  fontSize: '36px',
                  fontWeight: '700',
                  fontFamily:'Playfair Display'
                }}
              >
                Thank you for your purchase
              </p>
              <p style={{ fontFamily: 'Lato', fontWeight: '400' }}>
                Order #2605
              </p>
              <div
                style={{
                  marginTop: '50px',
                  padding: '20px',
                  backgroundColor: '#fff',
                  border: 'solid 1px #cecece',
                  width: '100%',
                }}
              >
                <p style={{ fontFamily: 'Lato', fontWeight: '700' }}>
                  Hi Veri Beautiful Lady, your order is confirmed.
                </p>
                <p
                 className="fontLato"
                  style={{
                    fontFamily: 'Lato',
                    fontWeight: '300',
                    marginBottom: '0',
                    color:'#565556'
                  }}
                >
                  {' '}
                  We’ve accepted your order and we’re getting it ready. Comback
                  to this page for updates on your order status.
                </p>
              </div>


              <div style={{ width: '100%',backgroundColor:'#fff',marginTop: '20px',marginBottom:'20px',border: 'solid 1px #cecece' }}>
                    <Table
                      columns={columns1}
                      dataSource={data1}
                      pagination={false}
                      rowKey={(record) => record.id}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div style={{ width: '100%',backgroundColor:'#fff',marginTop: '20px',marginBottom:'20px',border: 'solid 1px #cecece' }}>
                    <Table
                      columns={columns2}
                      dataSource={data2}
                      pagination={false}
                      rowKey={(record) => record.id}
                      style={{ width: '100%' }}
                    />
                  </div>

              <div
                style={{
                  width: '100%',
                  backgroundColor: '#fff',
                  marginTop: '30px',
                  padding: '26px 20px',
                  border: 'solid 1px #cecece',
                }}
              >
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
                            marginRight:'22px'
                          }}
                        >
                          $ 34
                        </p>
                      </div>
                    </div>
                  );
                })}
                <hr></hr>
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
                    <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>
                      $ 10
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
                  <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>Total</p>
                  <p style={{ fontWeight: '700', fontFamily: 'Lato' }}>$ 102</p>
                </div>
              </div>
              <div
                style={{
                  width: '100%',
                  marginTop: '50px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Lato',
                    
                  }}
                >
                    Need help? <NavLink to="/contact" style={{color: '#FF9592',textDecoration:'underline'}}>Contact us</NavLink>
                </span>
                <NavLink to="/"
                  className="button-main"
                  style={{
                    width: '300px',
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
                   Continue shopping
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderStatus;
