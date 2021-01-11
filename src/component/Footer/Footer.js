import React from 'react';
import { Col, Row } from 'antd';
import {BavLinh, NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ padding: '83px 70px', backgroundColor: 'black' }}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <img
              src="./image/logo/logo2.png"
              style={{ width: '186px', height: '38px',marginBottom:'40px' }}
              alt="logo main"
            />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NavLink to="/"
                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',fontFamily:'Lato' }}
              >
                Home
              </NavLink>
              <p
                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',marginRight:'3px',marginLeft:'3px',fontFamily:'Lato' }}
              >
                |{' '}
              </p>
              <NavLink to="/store"
                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',fontFamily:'Lato' }}
              >
                Shop
              </NavLink>
              <p
                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',marginRight:'3px',marginLeft:'3px',fontFamily:'Lato' }}
              >
                |{' '}
              </p>
             <NavLink to="/kits"

                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',fontFamily:'Lato' }}
              >
                Kits
              </NavLink>
              <p
                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',marginRight:'3px',marginLeft:'3px',fontFamily:'Lato' }}
              >
                |{' '}
              </p>
              <NavLink to="/about"

                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',fontFamily:'Lato' }}
              >
                About
              </NavLink>
              <p
                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',marginRight:'3px',marginLeft:'3px',fontFamily:'Lato' }}
              >
                |{' '}
              </p>
              <NavLink to="/policy"
                style={{ color: 'white', fontWeight: 'bold', fontSize: '14px',fontFamily:'Lato' }}
              >
                Shipping policy
              </NavLink>
            </div>
            <p
              style={{ fontWeight: '300', fontSize: '14px', color: '#FAFAFA' }}
            >
              #belikeAphrodite @since2020
            </p>
          </div>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection:'column',
              justifyContent: 'flex-end',
              alignItems:'flex-end'
            }}
          >
              <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
              <p style={{ color: '#fff', fontWeight: '400', fontSize: '14px' }}>
              About the company
            </p>
            <p
              style={{
                color: '#FAFAFA',
                fontWeight: '400',
                fontSize: '14px',
                marginTop: '19px',
                fontFamily: 'Lato',
                width:'273px'
              }}
            >
              We only formulate with the highest quality natural ingredients,
              and believe what’s not in the formula is just as important as what
              is.
            </p>
            <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'flex-start'}}>
            <img src="./image/foot/is.png" style={{width:'22px',height:'22px'}} alt="instargram"/>
                <img src="./image/foot/fb.png" style={{width:'22px',height:'22px',marginLeft:'10px'}} alt="facebook"/>
                <img src="./image/foot/tt.png" style={{width:'22px',height:'22px',marginLeft:'10px'}} alt="twitter"/>

            </div>
            <p  style={{
                color: '#FAFAFA',
                fontWeight: '700',
                fontSize: '10px',
                marginTop: '19px',
              }}>© 2020 APHRO Vietnam, Inc. All rights reserved. </p>
              </div>
          
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Footer