import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/petrakip-q' className='navbar-logo' onClick={closeMobileMenu}>
            PetraKIP
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/petrakip-q/projekt' className='nav-links' onClick={closeMobileMenu}>
                Über das Projekt
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/petrakip-q/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Unser Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/petrakip-q/papers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Veröfentlichungen  
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/petrakip-q/instrument'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Instrument  
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
