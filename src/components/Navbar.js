import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const RESUME_ROUTE = process.env.REACT_APP_PROFILE_RESUME;
const GITHUB_LINK = process.env.REACT_APP_GITHUB_LINK;
const LINKEDIN_LINK = process.env.REACT_APP_LINKEDIN_LINK;


function Navbar() {
  let enableOverlay = false;
  const [isOpen, setClick] = useState(false);


  const closeMenu = () => setClick(false);
  const openMenu = () => setClick(!isOpen);
  const closeAndscrollToTop = () => {setClick(false);window.scrollTo({ top: 0, behavior: "smooth" });};

  return (
    <Fragment>
      <div className="st-header">
        <div className="st-header-content">
          <div
            className={
              "st-logo-encaps-header vertical-center " +
              (isOpen ? "st-header-translate" : "")
            }
          >
            <Link to="/">
              <div className="st-logo st-scale"></div>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={"st-navigation-overlay " + (isOpen ? "st-overlay-show" : "")}
        onClick={closeMenu}
      />
      <nav
        className={"st-navigation " + (isOpen ? "" : "st-navigation-translate")}
      >
        <div className="menu-icon st-nav-button nav-media-q" onClick={openMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>

        <div className="st-navigation-inner">
          <div className="st-logo-div">
            <div className="st-logo-encaps">
              <Link to="/" onClick={closeMenu}>
                <div className="st-logo st-scale"></div>
              </Link>
            </div>
          </div>

          <div className="st-nav-dash-encaps">
            <div className="st-nav-dash" />
          </div>

          <div className="st-main-menu">
            <ul>
              <li>
                <Link
                  to="/"
                  className="home-link"
                  onClick={closeAndscrollToTop}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="portfolio-link"
                  onClick={closeAndscrollToTop}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="blog-link"
                  onClick={closeAndscrollToTop}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="contact-link"
                  onClick={closeAndscrollToTop}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={RESUME_ROUTE}
                  className="resume-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(RESUME_ROUTE);
                  }}
                >
                  &#8625; Resume &#8624;
                </Link>
              </li>
            </ul>
          </div>

          <div className="st-nav-footer">
            <ul>
              <li>
                <a href={LINKEDIN_LINK} target="blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href={GITHUB_LINK} target="blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                {/* <a href={EMAIL_LINK} target="blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a> */}
                <Link
                  to="/contact"
                  onClick={closeAndscrollToTop}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
            </ul>
            <div className="st-nav-footer-gap">
              <div className="st-nav-dash-footer" />
            </div>
            <p>&copy; 2020 shafitek.</p>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
