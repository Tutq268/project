import React from 'react'
import "./Navbar.css";

const Navbar = ({ sticky }) =>{
    return(
        <nav className= {sticky ? "navbar navbar-sticky navbar-expand-lg" : "navbar navbar-expand-lg"} style={{padding: '17px 50px'}}>
        <a className="navbar-brand" href="#">
          <img src="./image/logo/logo.png" style={{width: '155px',height: '32px'}} />
        </a>
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
                Shop
              
            </li>
            <li className="nav-item active">
                Kits
              
            </li>
            
            <li className="nav-item active">
                About
              
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item active menu-left">
             <img src="./image/Home/logo-aphro-04.png" alt="aphro" style={{width:'23px',height: '23px'}} />
             
            </li>
            <li className="nav-item active menu-left">
            <img src="./image/Home/Vector.png" alt="vector" style={{width:'23px',height: '23px'}} />
            
            </li>
            <li className="nav-item active">
            <img src="./image/Home/Vector-2.png" alt="vector 2" style={{width:'23px',height: '23px'}} />
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar