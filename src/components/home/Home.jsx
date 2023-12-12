import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Carousel from './Carousel';
import './Home.css';
import Brands from './Brands';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Brands />
    </div>
  );
};

export default Home;