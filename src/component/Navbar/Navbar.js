import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, Redirect } from 'react-router-dom';
import { Modal, Button } from 'antd';
import { modalData, modalData2 } from './data';
import Vector from './../../asset/image/Vector.png'

const Navbar = ({ sticky }) => {
  const token = localStorage.getItem('tokenWeb');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalWishList, setIsModaWishList] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [heartIcon,setHeartIcon] = useState("./image/Home/Vector-2.png")
  const [userIcon,setUserIcon] = useState("./image/Home/Vector.png")
  const [bagIcon,setBagIcon] = useState(Vector)
  const handleOk = () => {
    setIsModalVisible(false);
    setIsModaWishList(false);
    setIsModalLogin(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModaWishList(false);
    setIsModalLogin(false);
  };

  return (
    <div>
      {isCheckout && <Redirect to="/shipping-information" />}
      <nav
        className={
          sticky
            ? 'navbar navbar-sticky navbar-expand-lg'
            : 'navbar navbar-expand-lg'
        }
        style={{ padding: '17px 50px' }}
      >
        {/* <a className="navbar-brand" href="/"> */}
        <NavLink to="/">
          <img
            src="./image/logo/logo.png"
            style={{ width: '155px', height: '32px' }}
            alt="logo"
          />
        </NavLink>

        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/store" style={{ color: 'black',fontFamily:'Playfair Display' }}>
                Shop
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/kits" style={{ color: 'black',fontFamily:'Playfair Display' }}>
                Kits
              </NavLink>
            </li>

            <li className="nav-item active">
              <NavLink to="/about" style={{ color: 'black',fontFamily:'Playfair Display' }}>
                About
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/contact" style={{ color: 'black',fontFamily:'Playfair Display' }}>
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li
              className="nav-item active menu-left"
              // style={{width: clickSearch && '500px',borderBottom: clickSearch && 'solid 1px black'}}
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{
                  width: '500px',
                  borderBottom: clickSearch ? 'solid 1px black' : '',
                  display:'flex',
                  justifyContent:'flex-end',
                  paddingBottom:'2px'
                }}
              >
                <img
                  onClick={() => {
                    setClickSearch(!clickSearch);
                  }}
                  src="./image/Home/search.png"
                  alt="vector"
                  style={{ width: '23px', height: '23px' }}
                />
              </div>
            </li>
            <li className="nav-item active menu-left" onMouseEnter={() => setUserIcon("./image/Home/blackPerson.png")} onMouseLeave={() => setUserIcon("./image/Home/Vector.png")}>
              <NavLink to={token ? '/profile' : '/login'}>
                <img
                  src={
                    token
                      ? './image/Product/productAvt.png'
                      : userIcon
                  }
                  alt="aphro"
                  style={{ width: '23px', height: '23px' }}
                />
              </NavLink>
            </li>
            <li
              className="nav-item active menu-left"
              onClick={() => {
                setIsModaWishList(true);
                setIsModalVisible(false);
                setIsModalLogin(false);
              }}
              style={{ cursor: 'pointer' }}
              onMouseEnter = {() => setHeartIcon("./image/Home/blackHeart.png")}
              onMouseLeave={() => setHeartIcon("./image/Home/Vector-2.png")}
            >
              <img
                src={heartIcon}
                alt="heart"
                style={{ width: '23px', height: '23px' }}
              />
            </li>
            <li
              className="nav-item active"
              onClick={() => {
                setIsModalVisible(true);
                setIsModaWishList(false);
                setIsModalLogin(false);
              }}
              style={{ cursor: 'pointer' }}
              onMouseEnter = {() => setBagIcon("./image/Home/blackBag.png")}
              onMouseLeave ={() => setBagIcon(Vector)}
            >
              <img
                src={bagIcon}
                alt="white"
                style={{ width: '23px', height: '23px' }}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        title="Shopping Cart"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{  padding: '32px 35px 60px 35px', borderBottom: 'solid 1px #ccc' }}>
            {modalData.map((value, index) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    marginBottom: index !== modalData.length - 1 && '35px',
                  }}
                  key={index}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={value.image}
                      style={{
                        width: '140px',
                        height: '170px',
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
                      <span style={{ color: '#cecece' }}>x</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                    <p
                      style={{
                        fontFamily: 'Lato',
                        fontWeight: '300',
                        fontSize: '14px',
                      }}
                    >
                      $ 34
                    </p>
                    <div
                      style={{
                        width: '138px',
                        height: '42px',
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
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '21px 30px 50px 30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <p style={{ fontWeight: '600', fontFamily: 'Lato' }}>Subtotal</p>
              <p style={{ fontWeight: '600', fontFamily: 'Lato' }}>$ 102</p>
            </div>
            <p
              style={{
                fontWeight: '300',
                fontFamily: 'Lato',
                marginBottom: '0px',
              }}
            >
              shipping & taxes will be calculated at check out
            </p>
            <div style={{ marginTop: '30px' }}>
              <NavLink to="/shipping-information"
                className="button-main"
                style={{
                  width: '100%',
                  size: 'large',
                  height: '50px',
                  fontFamily: 'Lato',
                  
                }}
              >
                Checkout
              </NavLink>
            </div>
            
          </div>
        </div>
      </Modal>

      <Modal
        title="Wishlist"
        visible={isModalWishList}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: '32px 35px 60px 35px', borderBottom: 'solid 1px #ccc' }}>
            {modalData2.map((value, index) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: index !== modalData.length - 1 && '35px',
                  }}
                  key={index}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={value.image}
                      style={{
                        width: '140px',
                        height: '170px',
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
                      <span style={{ color: '#cecece' }}>x</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                    <p
                      style={{
                        fontFamily: 'Lato',
                        fontWeight: '300',
                        fontSize: '14px',
                      }}
                    >
                      $ 34
                    </p>
                    <div
                      style={{
                        width: '138px',
                        height: '42px',
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
                  </div>
                  <div style={{ marginTop: '5px', marginLeft: '10px' }}>
                    {value.tick ? (
                      <img
                        style={{ width: '18px', height: '18px' }}
                        src="./image/modal/modaltick.png"
                        alt="modal tick"
                      />
                    ) : (
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          border: 'solid 1px grey',
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '21px 30px 50px 30px',
            }}
          >
            <p
              style={{
                fontWeight: '300',
                fontFamily: 'Lato',
                marginBottom: '0px',
              }}
            >
              Selected (3) items
            </p>
            <div style={{ marginTop: '30px' }}>
              <Button
                className="button-main"
                style={{
                  width: '100%',
                  fontFamily: 'Lato',
                  size: 'large',
                  height: '50px',
                }}
                onClick={() =>{
                  setIsModaWishList(false)
                  setIsModalVisible(true)
                }}
              >
                Add selected items to shopping cart
              </Button>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Button
                className="button-main"
                style={{
                  width: '100%',
                  fontFamily: 'Lato',
                  size: 'large',
                  height: '50px',
                }}
                onClick={() =>{
                  setIsModaWishList(false)
                  setIsModalVisible(true)
                }}
              >
                Add all items to shopping cart
              </Button>
            </div>
            {/* <div style={{ marginTop: '39px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <img
                  src="./image/modal/modal1.png"
                  style={{
                    width: '140px',
                    height: '170px',
                    marginRight: '30px',
                  }}
                  alt="product"
                />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p
                    style={{
                      fontWeight: '700',
                      fontFamily: 'Lato',
                      fontSize: '14px',
                    }}
                  >
                    APHRO the pearly goddess foaming cleanser
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
                  <p
                    style={{
                      fontFamily: 'Lato',
                      fontWeight: '300',
                      fontSize: '14px',
                    }}
                  >
                    $ 34
                  </p>
                  <div
                    style={{
                      width: '138px',
                      height: '42px',
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
                </div>
                <div style={{ marginTop: '5px', marginLeft: '10px' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      border: 'solid 1px grey',
                    }}
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Modal>
      <Modal
        title="Wishlist"
        visible={isModalLogin}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div
          style={{
            padding: '200px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ padding: '0 30px' }}>
            <img
              src="./image/modal/beauty1.png"
              alt="beauty"
              style={{ width: '146px', height: '146px' }}
            />
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Lato',
                fontWeight: '400',
                marginTop: '25px',
              }}
            >
              You have to log in to see this page.
            </p>
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Lato',
                fontWeight: '300',
              }}
            >
              You have to log in to see this page.
            </p>
          </div>

          <NavLink to="/login" style={{ marginTop: '90px', width: '100%' }}>
            <Button
              style={{
                width: '100%',
                backgroundColor: '#FF9592',
                color: '#000',
                size: 'large',
                height: '50px',
              }}
              onClick={() => setIsModalLogin(false)}
            >
              Login
            </Button>
          </NavLink>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
