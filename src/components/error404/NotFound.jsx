import React, { useRef, useEffect } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import './NotFound404.css';

const NotFound = () => {
  const bouncingWayneRef = useRef(null);

  useEffect(() => {
    const bouncingWayne = bouncingWayneRef.current;

    const handleBounceAndColorChange = () => {
      const rect = bouncingWayne.getBoundingClientRect();

      const isTouchingTop = rect.top <= 0;
      const isTouchingBottom = rect.bottom >= window.innerHeight;

      if (isTouchingTop || isTouchingBottom) {
        // Change image color logic here
        const newColor = getRandomColor();
        bouncingWayne.querySelector('img').style.filter = `hue-rotate(${newColor}deg)`;
      }
    };

    const animationInterval = setInterval(handleBounceAndColorChange, 100);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  // Helper function to get a random color
  const getRandomColor = () => Math.floor(Math.random() * 360);

  return (
    <div>
      <Header />
      <div className="bouncing-wayne-wrapper">
        <div className="bouncing-wayne" ref={bouncingWayneRef}>
          <img src="../images/wayne.png" alt="The GOAT" />
          <p className="fs-3 text-dark text-center">Can't find the page you're looking for there, <strong>bud</strong>.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;