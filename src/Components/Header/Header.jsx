import React from 'react'

import {Link} from 'react-router-dom'

import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.headerSectionLeft}>
            <img src="https://www.freepnglogos.com/uploads/netflix-socks-png-18.png" height="25px" alt="Netflix Logo" />
        </div>
        <div className={styles.headerSectionRight}>
            <ul>
                <li className="item" id="item-1"><Link to='/'>Home</Link></li>
                <li className="item" id="item-2"><Link to='/'>About</Link></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Header;