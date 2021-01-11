import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Home from './../container/Home/Home'
  import Store from './../container/Store/index'
  import Kits from './../container/Kits/index'
  import About from './../container/About/index'
  import ProductDetail from './../container/ProductDetail/index'
  import Contact from './../container/Contact/index'
  import Login from './../container/Login/index'
  import Profile from './../container/Profile/Profile'
  import ShippingInfo from './../container/ShippingInformation/index'
  import PaymentMethod from './../container/PaymentMethod/index'
  import OrderStatus from './../container/OrderStatus/index'
  import Policy from './../container/Policy/index'
const RouterContainer = () =>{
    return(
        <Router>
             <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/store" component={Store} />
                  <Route exact path="/kits" component={Kits} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/product-detail" component={ProductDetail} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/shipping-information" component={ShippingInfo} />
                  <Route exact path="/payment-method" component={PaymentMethod} />
                  <Route exact path="/order-status" component={OrderStatus} />
                  <Route exact path="/policy" component={Policy} />

          </Switch>
        </Router>
    )

}

export default RouterContainer