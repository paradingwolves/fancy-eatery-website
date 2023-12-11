import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../../theme/theme.css';

const Header = () => {
  const [mapVisible, setMapVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setMapVisible(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMap = () => {
    if (windowWidth <= 991.98) {
      setMapVisible(!mapVisible);
    } else {
      setMapVisible(false);
    }
  };

  return (
    <header className="bg-dark text-white header-font">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/" className="navbar-brand mb-2 fs-3" style={{ position: 'relative' }}>
            River's Edge<span className="underline"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMap}
          >
            <i class="fa-solid fa-burger"></i>
          </button>
          <div className={`offcanvas offcanvas-start bg-dark ${mapVisible ? 'show' : ''}`} tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="navbarNavLabel">River's Edge</h5>
              <button type="button" className="btn-close bg-white text-reset" onClick={handleToggleMap} data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body justify-content-center">
              {mapVisible && (
                <div>
                  <h2 className='border-1 text-white text-center fw-bold fs-1'>River's Edge</h2>
                  <p className="border-2 text-secondary text-center">494 Riverdale Ave</p>
                </div>
              )}
              <ul className="navbar-nav text-center">
                <li className="nav-item">
                  <Link to="/menu" className="nav-link text-decoration-none fs-4">Menu</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-decoration-none fs-4">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/book_reservation" className="nav-link text-decoration-none fs-4">Reservations</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-decoration-none fs-4">Contact</Link>
                </li>
              </ul>
              {mapVisible && (
                <div>
                  <p className='text-white text-center fs-4 mt-3'>Come Dine With Us!</p>
                  <iframe
                    title="Google Maps"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94400.2333732191!2d-83.03818655788194!3d42.321043203972174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d535a408c70b%3A0x8733bebcda39060b!2sRiver&#39;s%20Edge%20Tap%20%26%20Table!5e0!3m2!1sen!2sca!4v1702327401951!5m2!1sen!2sca"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
