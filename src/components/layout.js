import React, { useState } from "react";
import { Link } from "gatsby";
import { FaBars, FaFacebook, FaTwitter } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Logo from "../images/logo.jpg";
import "../styles/layout.css";

const Layout = ({ pageTitle, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <title>{pageTitle}</title>

      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <nav className="nav">
            <Link className="nav-logo" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div className="menu-toggle" onClick={() => setShow(!show)}>
              {show ? <GrClose /> : <FaBars />}
            </div>

            <ul className={show ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/about" className="nav-links">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/programs" className="nav-links">
                  PROGRAMS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item nav-btn">
                <Link to="/donate" className="btn">
                  Donate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Body */}
      <main className="body">{children}</main>

      {/* Footer */}
      <footer>
        <div className="footer container">
          <Link to="/">
            <img className="footer-logo" src={Logo} alt="logo" />
          </Link>

          <div className="footer-links-container">
            <ul className="footer-text">
              <li>
                <Link to="/about" className="footer-links">
                  About
                </Link>
              </li>
              <li>
                <Link to="/programs" className="footer-links">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-links">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="footer-links">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-bottom grid">
            <p className="copyright">&copy; Copyright 2022 Jedidiah Cares</p>

            <div className="footer-icons">
              <a href="https://www.facebook.com/jedidiahcares/">
                <FaFacebook className="footer-links" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className="footer-links" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
