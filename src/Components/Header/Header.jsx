import React from "react";

import { Link } from "react-router-dom";

import styles from "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerSectionLeft">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-socks-png-18.png"
          height="25px"
          alt="Netflix Logo"
        />
      </div>
      <div className="headerSectionRight">
        <ul>
          <li className="item" id="item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="item" id="item">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="item" id="item">
            <Link to="/search" className="link">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
