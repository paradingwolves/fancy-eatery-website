import React from 'react';
import './Footer.css'; // Corrected import statement

const Footer = () => {


  return (
    <footer className="bg-dark text-white-emphasis p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center mb-3">
            <h5 className='fw-bold footer-font fs-3 mb-3 underline'>Contact Us</h5>
            <p>
              <i className="fas fa-phone-alt me-2"></i>
              <a href="tel:+1234567890" className="text-white text-decoration-none">123-456-7890</a>
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              <a href="mailto:info@example.com" className="text-white text-decoration-none">info@example.com</a>
            </p>
          </div>
          <div className="col-md-3 text-center mb-3">
            <h5 className='fw-bold footer-font fs-3 mb-3'>Visit Us</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              <a
                href="https://maps.app.goo.gl/vVy8tLNGZ2Z3TpV47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                View on Google Maps
              </a>
            </p>
            {/* Add links for Apple Maps and OpenStreetMap if needed */}
          </div>
          <div className="col-md-3 text-center">
            <h5 className='fw-bold footer-font fs-3 mb-3'>Connect With Us</h5>
            <p>
              <a
                href="https://www.facebook.com/RiversEdgeWindsor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fab fa-facebook m-2"></i>Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/riversedgewindsor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fab fa-instagram m-2 "></i>Instagram
              </a>
            </p>
            {/* Add other social media links if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
