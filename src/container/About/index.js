import React from 'react';

import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Footer from './../../component/Footer/Footer';

const About = () => {
  const { isSticky, element } = useSticky();
  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
          <div ref={element}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  margin: '120px 150px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    fontWeight: '700',
                    fontSize: '36px',
                    marginBottom: '25px',
                  }}
                >
                  Welcome To
                </p>
                <img
                  src="./image/about/about1.0.png"
                  style={{
                    width: '480px',
                    height: '100px',
                    marginBottom: '33px',
                  }}
                  alt="logo"
                />
                <p
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Lato',
                    fontSize: '24px',
                  }}
                >
                  Be like Aphrodite
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="./image/about/about1.png"
                    alt="about 1"
                    style={{ width: '1030px', height: '850px' }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <p style={{ fontWeight: '700', fontSize: '36px' }}>
                      Our Inspiration
                    </p>
                    <p style={{ fontFamily: 'Lato' }}>
                      Humanity have always been amazed with the glorious beauty
                      of a legendary goddess - Aphrodite. For both ancient
                      artists and present creators, the goddess has been admired
                      as the greatest inspiration for many masterpieces.
                    </p>

                    <p style={{ fontFamily: 'Lato' }}>
                      APHRO is also formed on this inspiration. We aim to help
                      you nurture the classic beauty with the exclusive fomula
                      skin-care routine.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: '300px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '220px',
                    }}
                  >
                    <p style={{ fontSize: '36px', fontWeight: '700' }}>
                      Our Products
                    </p>
                    <p style={{ fontWeight: '400', fontFamily: 'Lato' }}>
                      Each one of our products are easy-to-use hybrids that make
                      your skin look naturally glowing and lit-from-within.
                    </p>
                    <p style={{ fontWeight: '400', fontFamily: 'Lato' }}>
                      We only formulate with the highest quality natural
                      ingredients, and believe what’s not in the formula is just
                      as important as what is.
                    </p>
                    <p style={{ fontWeight: '400', fontFamily: 'Lato' }}>
                      Our skincare essentials are clean, cruelty-free and free
                      of parabens, sulfates, and phthalates, among others
                    </p>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <img
                      src="./image/about/about2.1.png"
                      style={{ height: '580px', width: '880px' }}
                      alt="about 2-1"
                    />
                    <img
                      src="./image/about/about2.2.png"
                      style={{
                        width: '300px',
                        height: '300px',
                        position: 'absolute',
                        bottom: '30px',
                        left: '-250px',
                      }}
                      alt="about 2-2"
                    />
                    <img
                      src="./image/about/about2.3.png"
                      style={{
                        width: '250px',
                        height: '250px',
                        position: 'absolute',
                        top: '-220px',
                        left: '250px',
                      }}
                      alt="about 2-2"
                    />
                    <img
                      src="./image/about/about2.4.png"
                      style={{
                        width: '300px',
                        height: '300px',
                        position: 'absolute',
                        right: '0px',
                        top: '-330px',
                      }}
                      alt="about 2-2"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '224px',
                    width: '100%',
                  }}
                >
                  <div style={{ position: 'relative', marginRight: '122px' }}>
                    <img
                      src="./image/about/about3.png"
                      style={{ height: '254px', width: '561px' }}
                      alt="about 3"
                    />
                    <img
                      src="./image/about/about3.1.png"
                      style={{
                        width: '174px',
                        height: '174px',
                        position: 'absolute',
                        right: '-74px',
                        top: '-74px',
                      }}
                      alt="about 2-2"
                    />
                    <img
                      src="./image/about/about3.2.png"
                      style={{
                        width: '174px',
                        height: '174px',
                        position: 'absolute',
                        right: '120px',
                        top: '-74px',
                      }}
                      alt="about 3-2"
                    />
                    <img
                      src="./image/about/about3.3.png"
                      style={{
                        width: '174px',
                        height: '174px',
                        position: 'absolute',
                        right: '314px',
                        top: '-74px',
                      }}
                      alt="about 3-2"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '36px', fontWeight: '700' }}>
                      The Story Of Us
                    </p>
                    <p style={{ fontFamily: 'Lato', fontWeight: '400' }}>
                      Educating and exciting people about taking care of their
                      skin has always been our true inspiration and goal behind
                      starting APHRO. Knowing this has been a part of our
                      journey, we are always open for suggestion and
                      reccommendation.{' '}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    marginTop: '170px',
                  }}
                >
                  <img
                    src="./image/about/about4.png"
                    alt="about 4"
                    style={{ width: '111px', height: '111px' }}
                  />
                  <p
                    style={{
                      fontFamily: 'Lato',
                      fontWeight: '600',
                      fontSize: '24px',
                      marginBottom: '25px',
                    }}
                  >
                    #BEAPHRO
                  </p>
                  <p
                    style={{
                      fontFamily: 'Lato',
                      fontWeight: '300',
                      fontSize: '18px',
                      marginBottom: '27px',
                    }}
                  >
                    For all enquiries, please contact us through contact page{' '}
                  </p>
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
                      }}
                    >
                      Contact us
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
