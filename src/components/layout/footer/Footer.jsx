import React from 'react';
import './Footer.css'; // Corrected import statement

const Footer = () => {


  return (
    <footer className="bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="fas fa-phone-alt me-2"></i>
              <a href="tel:+1234567890" className="text-white">123-456-7890</a>
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              <a href="mailto:info@example.com" className="text-white">info@example.com</a>
            </p>
          </div>
          <div className="col-md-4 text-center mb-3">
            <h5>Visit Us</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              <a
                href="https://maps.google.com/?q=Your+Location"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                View on Google Maps
              </a>
            </p>
            {/* Add links for Apple Maps and OpenStreetMap if needed */}
          </div>
          <div className="col-md-4 text-center">
            <h5>Connect With Us</h5>
            <p>
              <a
                href="https://www.facebook.com/RiversEdgeWindsor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-facebook-square me-2"></i>Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/riversedgewindsor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-instagram-square me-2"></i>Instagram
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
