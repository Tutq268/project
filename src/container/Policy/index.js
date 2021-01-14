import React from 'react';

import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';

import { Button } from 'antd';
// import Footer from "./../../component/Footer/Footer"
import Footer from './../../component/Footer/Footer'
import {NavLink} from 'react-router-dom'
const Policy = () =>{
    const { isSticky, element } = useSticky();
    return(
        <div>
        <Navbar sticky={isSticky} />
        <main style={{ backgroundColor: '#FAFAFA' }}>
          <section className="welcome">
            <div ref={element}>
            <div
              style={{
                padding: '150px 20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
                    <p style={{fontWeight:'bold',fontSize:'36px',marginBottom: '80px', fontFamily: 'Playfair Display'}}>Shipping Policy</p>
                    <div style={{width: '100%',display:'flex',flexDirection: 'column',justifyContent:'flex-start'}}>
                            <p style={{fontWeight:'bold',fontFamily:'Lato'}}>Domestic Shipping Rates</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato',marginBottom:'36px'}}>All domestic shipments are delivered through Viettelpost. There might be a difference in the shipping fee due to your specific location. Shipping rates will be automatically calculated in the Payment section. This calculation is 100% based on the shipping company’s policies. Please notice that Aphro doesn’t receive any interest from the shipping progress.</p>
                            <p style={{fontWeight:'bold',fontFamily:'Lato'}}>Shipping Internationally</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato',marginBottom:'36px'}}>We are also able to ship internationally. We currently ship via DHL International Standard to: Austria, Belgium, Croatia, Denmark, Finland, France, Germany, Greece, Hong Kong, Hungary, Iceland, Ireland, Israel, Luxembourg, Malaysia, Norway, The Philippines, Poland, Portugal, Singapore, Slovenia, Spain, Sweden, Switzerland, and United Kingdom all via DHL International Standard. This service takes anywhere up to 15 business days.</p>
                            <p style={{fontWeight:'bold',fontFamily:'Lato'}}>Notice</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato'}}>Please note that for all shipments, we are not responsible for lost or stolen packages.</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato'}}>Aphro is not responsible for duties and fees mandated by customs and can not ship out replacement packages. </p>
                            <p style={{fontWeight:'400',fontFamily:'Lato'}}>Please also be aware that in the event that a delivery address is submitted incorrectly or mistyped when an order is placed, Aphro assumes no responsibility. We will work to get the package to you, though an address error can incur a turnaround time of up to 3 or more weeks.</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato'}}>Your 100% satisfaction is important to us. Aphro allows 30 day returns for all product with the exception of those listed below.* Please note that the original shipping costs cannot be refunded.</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato'}}>Please note that single-use products are eligible for return only if they are unused and in its original packaging. This includes sheet masks, rubber masks and bubble mesh masks.</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato'}}>Any Kits are final sale and ineligible for return.</p>
                            <p style={{fontWeight:'400',fontFamily:'Lato'}}>We do not accept returns or exchanges on international orders and shipments.</p>
                            <div style={{marginTop:'52px'}}>
                    <NavLink to="/" style={{width: '100%',height:'50px',fontFamily:'Lato'}}  className="button-main">
                    I understand & want to continue
                    </NavLink>
                    </div>
                    </div>
                </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
}

export default Policy