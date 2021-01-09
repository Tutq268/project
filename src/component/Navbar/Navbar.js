import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ sticky }) => {
  return (
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
            <NavLink to="/store"  style={{color:'black'}}>Shop</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/kits"  style={{color:'black'}}>Kits</NavLink>
          </li>

          <li className="nav-item active">
            <NavLink to="/about" style={{color:'black'}}>About</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/contact" style={{color:'black'}}>Contact</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item active menu-left">
            <img
              src="./image/Home/blackPerson.png"
              alt="aphro"
              style={{ width: '23px', height: '23px' }}
            />
          </li>
          <li className="nav-item active menu-left">
            <img
              src="./image/Home/blackHeart.png"
              alt="vector"
              style={{ width: '23px', height: '23px' }}
            />
          </li>
          <li className="nav-item active">
            <img
              src="./image/Home/blackBag.png"
              alt="vector 2"
              style={{ width: '23px', height: '23px' }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
