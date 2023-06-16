import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser } from 'react-icons/fa';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <h1>BookStore CMS</h1>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/" className="links-desktop">Home</Link>
          </li>
          <li>
            <Link to="/categories" className="links-desktop">Categories</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon onClick={toggleMenu} icon={faBars} className="mobile-hamburger" />
      {isOpen && (
      <div className="mobile-menu">
        <FontAwesomeIcon onClick={toggleMenu} className="close-button" icon={faTimes} />
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu} className="links-mobile">Home</Link>
          </li>
          <li>
            <Link to="/categories" onClick={toggleMenu} className="links-mobile">Categories</Link>
          </li>
        </ul>
      </div>
      )}
      <div className="user-profile-icon">
        <FaUser />
      </div>
    </div>
  );
}

export default NavBar;
