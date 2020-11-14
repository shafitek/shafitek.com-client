import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const RESUME_ROUTE = process.env.PUBLIC_URL+"/files/resume.pdf";

// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}


function Navbar() {
  let enableOverlay = false;
  const [click, setClick] = useState(false);
  const [winDim, setWinDim] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce( _ => {
      setWinDim({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener('resize', debouncedHandleResize)
    enableOverlay = winDim.width < 768;
    return _ => {
      window.removeEventListener("resize", debouncedHandleResize);
    }
  });

  const handleClick = () => setClick(enableOverlay && !click);

  return (
    <Fragment>
      <div
        className={"st-navigation-overlay " + (click ? "st-overlay-show" : "")}
        onClick={handleClick}
      />
      <nav
        className={"st-navigation " + (click ? "" : "st-navigation-translate")}
      >
        <div
          className="menu-icon st-nav-button nav-media-q"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <div class="st-navigation-inner">
          <div className="st-logo-div">
            <div className="st-logo-encaps">
              <Link to="/" onClick={handleClick}>
                <div className="st-logo st-scale"></div>
              </Link>
            </div>
          </div>

          <div className="st-main-menu">
            <ul>
              <li>
                <Link to="/" className="home-link" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="portfolio-link"
                  onClick={handleClick}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="blog-link" onClick={handleClick}>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="contact-link"
                  onClick={handleClick}
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
        </div>
      </nav>

      <div className="st-header">
        <div className="st-header-content">
          <div className="st-logo-encaps-header vertical-center">
            <Link to="/">
              <div className="st-logo st-scale"></div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
