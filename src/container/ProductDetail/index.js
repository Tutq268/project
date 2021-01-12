import React,{useState} from 'react';
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

const ProductDetail = () => {
  const [image,setImage] = useState("./image/Home/heart-1.png")
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
            <Row>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                style={{ padding: '0 50px' }}
              >
                <div
                  style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <img src="./image/Product/product1.png" style={{width: '549px',height:'707px'}} alt="product 1" />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginTop: '20px',
                    }}
                  >
                    <img
                      src="./image/Product/product2.png"
                      alt="product 2"
                      style={{ width: '61px', height: '61px' }}
                    />
                    <img
                      src="./image/Product/product2.png"
                      alt="product 2"
                      style={{
                        width: '61px',
                        height: '61px',
                        marginLeft: '20px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: '550px',
                      borderTop: 'solid 1px black',
                      borderBottom: 'solid 1px black',
                      marginTop: '20px',
                    }}
                  >
                    <div
                      style={{
                        padding: '15px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottom: 'solid 1px black',
                      }}
                    >
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        How To Use{' '}
                      </span>
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        +
                      </span>
                    </div>

                    <div
                      style={{
                        padding: '15px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        Ingredients{' '}
                      </span>
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                style={{ padding: '0 50px' }}
              >
                <div
                  style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <p style={{ fontWeight: '700', fontSize: '24px' }}>
                    Pearly Goddess Gentle Make-up Remover
                  </p>
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontSize: '18px',
                      fontFamily: 'Lato',
                    }}
                  >
                    APHRO’s Original Make-up Remover
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Rate
                      disabled
                      defaultValue={4}
                      style={{ color: '#FF9592' }}
                    />
                    <span
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Lato',
                        fontSize: '14px',
                        marginLeft: '20px',
                        marginTop: '5px',
                      }}
                    >
                      998 Reviews
                    </span>
                  </div>
                  <p
                    style={{
                      fontWeight: '700',
                      fontSize: '24px',
                      marginTop: '30px',
                    }}
                  >
                    $9.80
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingRight: '100px',
                    }}
                  >
                    <div
                      style={{
                        width: '142px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'solid 1px black',
                      }}
                    >
                      <span style={{ fontWeight: '400', fontSize: '14px' }}>
                        SIZE 1 oz/ 30 mL
                      </span>
                    </div>
                    <div
                     className="button-main"
                      style={{
                        width: '195px',
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
                        add to card
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: '21px',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingRight: '100px',
                    }}
                  >
                    <div
                      style={{
                        width: '142px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: 'solid 1px black',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                      }}
                    >
                      <span style={{ fontWeight: '700', fontSize: '14px' }}>
                        -
                      </span>
                      <span style={{ fontWeight: '700', fontSize: '14px' }}>
                        1
                      </span>
                      <span style={{ fontWeight: '700', fontSize: '14px' }}>
                        +
                      </span>
                    </div>
                    <div
                      style={{
                        width: '195px',
                        height: '50px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setImage("./image/Product/heartpink.png")} onMouseLeave={() => setImage("./image/Home/heart-1.png")}
                    >
                      <img src={image}  alt="heart circle" />
                      <span
                      className="addWishlist"
                        style={{
                          fontWeight: '700',
                          fontSize: '14px',
                          marginLeft: '7px',
                        }}
                      >
                        Add to wishlist
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: '15px',
                      paddingRight: '100px',
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                      }}
                    >
                      Which skin type is it good for?
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      <span style={{ fontWeight: '700' }}>✔</span> Normal
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      <span style={{ fontWeight: '700' }}>✔</span> Oily
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      <span style={{ fontWeight: '700' }}>✔</span> Combination
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      <span style={{ fontWeight: '700' }}>✔</span> Dry
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      <span style={{ fontWeight: '700' }}>✔</span> Sensi
                    </p>
                    <p style={{ marginTop: '25px', fontWeight: '700' }}>
                      What it is:
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      A daily support formula with 100 percent high-purity,
                      sustainably-sourced, organic, cold-pressed rose hip seed
                      oil
                    </p>

                    <p style={{ marginTop: '25px', fontWeight: '700' }}>
                      If you want to know more…
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      This formulat and pro-vitamin A—that is both cold-pressed
                      and organic. This oil has been shown to reduce signs of
                      photo-aging nd many other skin conditions.
                    </p>

                    <p style={{ marginTop: '25px', fontWeight: '700' }}>
                      What else you need to know:
                    </p>
                    <p style={{ fontWeight: '400' }}>
                      This product is vegan, cruelty-free, cold-pressed,
                      organic, and formulated without water, alcohol, silicone,
                      nuts, and gluten. Rose Hip Seed Oil is completely
                      unrefined and imparts a natural scent partly due to its
                      high omega fatty acid content. This scent is not an
                      indication of rancidity. Rose Hip Seed Oil that does not
                      have a scent is refined and offers reduced benefits. It
                      comes in UV-protective packaging.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

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
                  textAlign: 'center',
                }}
              >
                Review from the Aphro’s Community
              </span>
              <span
                style={{
                  fontWeight: '300',
                  fontSize: '18px',
                  fontFamily: 'lato',
                  textAlign: 'center',
                }}
              >
                Based on their real experience, these are all from our verified
                buyers, not seeding at all{' '}
              </span>
            </div>
          </div>
          <div
            style={{
              marginTop: '50px',
              padding: '0 80px',
              marginBottom: '50px',
            }}
          >
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              pagination={{ clickable: true }}
              style={{ paddingBottom: '50px' }}
            >
              {review.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        width: '100%',
                        padding: '5px',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          padding: '15px',
                          display: 'flex',
                          flexDirection: 'column',
                          border: 'solid 0.5px black',
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
                            src="./image/Product/productAvt.png"
                            style={{
                              width: '80px',
                              height: '80px',
                              borderRadius: '80px',
                            }}
                            alt="product avatar"
                          />
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              marginLeft: '15px',
                              justifyContent: 'flex-end',
                              marginTop: '10px',
                            }}
                          >
                            <p style={{ fontWeight: '700', marginBottom: 0 }}>
                              {value.name}
                            </p>
                            <p style={{ fontWeight: '700' }}>
                              Do i recommend: Yes
                            </p>
                          </div>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '14px',
                          }}
                        >
                          <span style={{ fontWeight: '700', marginTop: '5px' }}>
                            Skintype:{' '}
                            <span style={{ fontWeight: '400' }}>
                              {value.skin}
                            </span>
                          </span>
                          <Rate
                            disabled
                            defaultValue={4}
                            style={{
                              color: '#FF9592',
                              margin: 0,
                              fontSize: '14px',
                            }}
                          />
                        </div>
                        <p style={{ marginTop: '15px', fontWeight: '700' }}>
                          {value.title}
                        </p>
                        <p style={{ fontWeight: '400' }}>{value.content}</p>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          {value.images.map((value, index) => {
                            return (
                              <div key={index} style={{ marginRight: '15px' }}>
                                <img
                                  src={value.image}
                                  style={{ width: '70px', height: '70px' }}
                                  alt="user"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Dropdown overlay={menu}>
              <Button>
                <span>
                  {' '}
                  <span style={{ fontWeight: '700' }}>Sort by:</span>{' '}
                  Recommended
                </span>{' '}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>

          {/* <div style={{ margin: '80px 172px 0 172px',paddingBottom:'150px' }}> */}
          <div className="paddingScreen">
              <div style={{paddingBottom : '150px'}}>
            <Row>
              <Col
                xl={10}
                lg={10}
                md={10}
                sm={24}
                xs={24}
                style={{ padding: '0 50px' }}
              >
                <div
                  style={{
                    padding: '0 15px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <p
                    style={{
                      fontWeight: '700',
                      marginBottom: '30px',
                      fontSize: '24px',
                    }}
                  >
                    You have tried this product?
                  </p>
                  <p>
                    Please share with us your experience. Feel free to to give
                    any useful tips for the Aphro’s Community We are always very
                    grateful with your feedbacks.
                  </p>
                  <p>Start writing a Review with just a few simple steps</p>
                  <div style={{ marginTop: '80px',display:'flex',alignItems:'flex-start',flexDirection:'column' }}>
                    <img
                      src="./image/Product/product5.png"
                      style={{ width: '62px', height: '62px',marginLeft:'10px' }}
                      alt="product 5"
                    />
                    <p style={{fontWeight:'700'}}>#BEAPHRO</p>
                  </div>
                </div>
              </Col>
              <Col
                xl={14}
                lg={14}
                md={14}
                sm={24}
                xs={24}
                style={{ padding: '0 50px' }}
              >
                <div
                  style={{
                    padding: '0 15px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{ display: 'flex', flex: 1, flexDirection: 'row' }}
                  >
                    <Input
                      size="large"
                      placeholder="Name"
                      style={{ flex: 0.6,fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />
                    <Input
                      size="large"
                      placeholder="Skin Type"
                      style={{ flex: 0.3, marginLeft: '15px',fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />
                  </div>
                  <div
                    style={{ display: 'flex', flex: 1, flexDirection: 'row', marginTop:'15px'
                }}
                  >
                    <Input
                      size="large"
                      placeholder="Do I recommend this product"
                      style={{ flex: 0.5,fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />
                    <div
                      style={{
                        marginLeft: '15px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems:'center',
                      }}
                    >
                      <span style={{marginTop:'5px',color: '#565556',marginRight:'10px'}}>Rating </span>
                      <Rate
                        defaultValue={0}
                        style={{ color: '#FF9592' }}
                      />
                    </div>
                  </div>
                  <div style={{marginTop:'15px'}}>
                  <Input
                      size="large"
                      placeholder="Title"
                      style={{ flex: 0.4,fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />

                  </div>
                  <div style={{marginTop:'15px'}}>
                  <TextArea
                      rows={5}
                      placeholder="Type your detail review here"
                      style={{ flex: 0.4,fontFamily:'Lato',fontWeight:'bold',fontSize:'14px' }}
                    />

                  </div>
                  <div style={{marginTop:'15px'}}>
                    <Button style={{width: '100%',backgroundColor:'#565556',color: '#fff',size:'large',height:'50px'}}>
                        Submit
                    </Button>
                    </div>
                </div>
              </Col>
            </Row>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
