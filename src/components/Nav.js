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
    <header>
      <div className="navbar">
        <h1>BookStore CMS</h1>
        <div className="nav__menu">
          <ul>
            <li>
              <Link to="/" className="links__desktop">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="links__desktop">
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          onClick={toggleMenu}
          icon={faBars}
          className="mobile__hamburger"
        />
        {isOpen && (
          <div className="mobile__menu">
            <FontAwesomeIcon
              onClick={toggleMenu}
              className="close__btn"
              icon={faTimes}
            />
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu} className="links__mobile">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  onClick={toggleMenu}
                  className="links__mobile"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="user__profile__icon">
          <FaUser />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
