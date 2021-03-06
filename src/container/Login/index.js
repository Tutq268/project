import React from 'react';
import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';
import {  Button, Input } from 'antd';
import Footer from './../../component/Footer/Footer';
import { UserOutlined,LockOutlined  } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'


const Login = () => {
  const { isSticky, element } = useSticky();
  const suffix = (
    <UserOutlined
      style={{
        fontSize: 16,
        cp: 'black',
      }}
    />
  );

  const suffix2 = (
    <LockOutlined
      style={{
        fontSize: 16,
        cp: 'black',
      }}
    />
  );
  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
          <div ref={element} style={{display:'flex',height: '100%',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:'120px'}}>
                <p style={{fontSize:'48px',fontWeight: '700',marginTop:'50px',fontFamily:'Playfair Display'}}>LOGIN</p>
                <Input 
                size="large"
                     style={{ fontFamily:'Lato',fontWeight:'bold',fontSize:'14px',width: '440px'}}
                    placeholder="Email or phone number"
                    suffix={suffix}
                />
                <Input 
                size="large"
                     style={{ fontFamily:'Lato',fontWeight:'bold',fontSize:'14px',width: '440px',marginTop:'20px'}}
                    placeholder="Password"
                    type="password"
                    suffix={suffix2}
                />
                 <div style={{marginTop:'20px'}}>
                    <NavLink to="/"  className="button-main"  style={{width: '440px',height:'50px'}} onClick={()=>{
                      localStorage.setItem("tokenWeb","tokenWeb")
                    }}>
                       Submit
                        
                    </NavLink>
           
                    </div>
                    <div style={{marginTop:'20px',textAlign:'center'}}>
                        <p style={{textDecoration:"underline",fontWeight:'400',color:'#565556'}}>Forgot password?</p>
                    </div>
                    <div style={{marginTop:'20px',width:'440px'}}>
                        <hr></hr>
                    </div>
                    <div style={{marginTop:'20px'}}>
                    <Button className="button-main" style={{width: '231px',height:'50px'}}>
                      Sign Up
                    </Button>
                    </div>
                    <div style={{marginTop:'20px',textAlign:'center'}}>
                        <p style={{fontWeight:'400',fontSize:'12px',color:'#565556'}}>or continue with</p>
                    </div>
                    <div style={{marginTop:'20px',textAlign:'center',display:'flex',flexDirection:'row',paddingBottom:'150px'}}>
                        <img alt="facebook" src="./image/login/fbLogin.png" style={{width:'26px',height:'26px',marginRight: '10px'}} />
                        <img alt="facebook" src="./image/login/ggLogin.png" style={{width:'26px',height:'26px',marginRight: '10px'}} />
                        <img alt="facebook" src="./image/login/ttLogin.png" style={{width:'26px',height:'26px'}} />

                    </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
