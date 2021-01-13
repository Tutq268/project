import React from 'react';
import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';
import { Col, Row, Rate, Menu, Dropdown, Button, Input } from 'antd';
import Footer from './../../component/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { review } from './data';
import SwiperCore, { Pagination } from 'swiper';
import { DownOutlined } from '@ant-design/icons';

SwiperCore.use([Pagination]);

const Contact = () => {
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
  const { TextArea } = Input;

  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
          <div ref={element} className="paddingScreen">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '48px',
                  marginBottom: '15px',
                  fontFamily:'Playfair Display'
                }}
              >
                CONTACT
              </p>
              <p
                style={{
                  fontFamily:'Lato',
                  fontWeight: '400',
                  fontSize: '24px',
                  marginBottom: '37px',
                }}
              >
                Get in touch with us
              </p>
            </div>
            <Row>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={24}
                xs={24}
                style={{ padding: '30px' }}
              >
                <div
                className="contact-change"
                 
                >
                  <p style={{ fontWeight: '500', marginBottom: '18px' }}>
                    Phone
                  </p>
                  <p style={{ textAlign: 'center', marginBottom: '18px',lineHeight:'27px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi scelerisque imperdiet facilisis. Nullam in risus
                    justo.{' '}
                  </p>
                  <p className="text" style={{textDecoration:'underline'}}> +84 999 999 999</p>
                </div>
              </Col>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={24}
                xs={24}
                style={{ padding: '30px' }}
              >
                <div
                   className="contact-change"
                >
                  <p style={{ fontWeight: '500', marginBottom: '18px' }}>
                  Mail
                  </p>
                  <p style={{ textAlign: 'center', marginBottom: '18px',lineHeight:'27px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi scelerisque imperdiet facilisis. Nullam in risus
                    justo.{' '}
                  </p>
                  <p className="text">example.info@gmail.com</p>
                </div>
              </Col>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={24}
                xs={24}
                style={{ padding: '30px' }}
              >
                <div
                 className="contact-change"
                >
                  <p style={{ fontWeight: '500', marginBottom: '18px' }}>
                  Live Chat
                  </p>
                  <p style={{ textAlign: 'center', marginBottom: '18px',lineHeight:'27px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi scelerisque imperdiet facilisis. Nullam in risus
                    justo.{' '}
                  </p>
                  <p className="text" style={{textDecoration:'underline'}}>Submit</p>
                </div>
              </Col>
            </Row>
            <hr></hr>

            <Row style={{paddingBottom:'150px',paddingTop:'50px'}}>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                style={{ padding: '0 50px',display: 'flex',justifyContent:'center',alignItems:'center' }}
              >
                  <img src="./image/contact/googlemap.png" alt="google map" style={{width: '500',height:'500'}} />
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                style={{ padding: '0 50px' }}
              >
                  <p style={{fontWeight:'700',fontSize:'36px',marginBottom:'18px',fontFamily:'Playfair Display'}}>Drop us a message</p>
                  <p style={{fontWeight:'400'}}>Have some suggestion or just want to say hi? Contact us:</p>

                <div style={{marginTop:'20px'}}>
                  <Input
                      size="large"
                      placeholder="Name"
                      style={{ flex: 0.4,fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />

                  </div>
                  <div style={{marginTop:'20px'}}>
                  <Input
                      size="large"
                      placeholder="Email"
                      style={{ flex: 0.4,fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />

                  </div>
                  <div style={{marginTop:'20px'}}>
                  <TextArea
                      rows={8}
                      placeholder="Message"
                      style={{ flex: 0.4,fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />

                  </div>
                  <div style={{marginTop:'20px'}}>
                    <Button style={{width: '100%',size:'large',height:'50px',fontFamily:'Lato'}}  className="button-main">
                        Submit
                    </Button>
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

export default Contact;
