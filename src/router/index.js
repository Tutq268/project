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

          </Switch>
        </Router>
    )

}

export default RouterContainer