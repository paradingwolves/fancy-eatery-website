import React, { useRef, useEffect } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import './NotFound404.css';

const NotFound = () => {
  const bouncingWayneRef = useRef(null);

  useEffect(() => {
    const bouncingWayne = bouncingWayneRef.current;

    const getRandomNumberInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const handleRandomBounce = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const boundingBox = bouncingWayne.getBoundingClientRect();
    
      // Calculate the maximum translate values to keep the image within the visible area
      const maxX = viewportWidth - boundingBox.width;
      const maxY = viewportHeight - boundingBox.height;
    
      // Calculate random translate values within the visible area
      const randomTranslateX = Math.random() * maxX - boundingBox.width / getRandomNumberInRange(1, 3);
      const randomTranslateY = Math.random() * maxY - boundingBox.height / getRandomNumberInRange(1, 5);
    
      const newColor = getRandomColor();
    
      bouncingWayne.style.transition = 'transform 0.5s ease'; // Adjust the transition duration as needed
      bouncingWayne.style.transform = `translate(${randomTranslateX}px, ${randomTranslateY}px)`;
      bouncingWayne.querySelector('img').style.filter = `hue-rotate(${newColor}deg)`;
    };

    const animationInterval = setInterval(() => {
      handleRandomBounce();
      setTimeout(() => {
        bouncingWayne.style.transition = 'none'; // Remove transition after slide to prevent continuous sliding
      }, 500); // Adjust the timeout to match the transition duration
    }, 1000); // Adjust the interval as needed

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
        <div className="bouncing-wayne mx-5" ref={bouncingWayneRef}>
          <img src="../images/wayne.png" alt="The GOAT" />
        </div>
        <p className="fs-3 mt-5 text-dark text-center stationary-text">
          Can't find the page you're looking for there, <strong>bud</strong>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
