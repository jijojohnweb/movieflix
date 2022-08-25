import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import kids from "../../Assets/kids.svg";
import hotstar from "../../Assets/hotstar.svg";
import styles from "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="nav-container">
          <div className="headerSectionLeft">
            <div className="menu-wrapper">
              <div className="menu-bar">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
              </div>
            </div>
            <img src={hotstar} className="brand-logo" alt="Brand Logo" />
            <div className="link-container">
            <Link to="/" id="" className="nav-link"><p className="nav-link-text">TV</p></Link>
            <Link to="/" id="" className="nav-link"><p className="nav-link-text">Movies</p></Link>
            <Link to="/" id="" className="nav-link"><p className="nav-link-text">Sports</p></Link>
            <Link to="/" id="" className="nav-link"><p className="nav-link-text">Disney+</p></Link>
            <Link to="/" id="" className="nav-link">
              <img src={kids} alt="kids" className="nav-img-kids"/>
            </Link>
            </div>

            
          </div>
          <div className="headerSectionRight">
          <div className="search-input">
              <input type="text" name="search" className="search-input-text" placeholder="Search"/>
            </div>

          <button className="subscribe-btn">Subscribe</button>
          <a herf="https://www.google.com" className="login-btn">LOGIN</a>
          </div>
        </div>
      </div>

      <div className="dummy-header"></div>
    </>
  );
}

export default Header;
