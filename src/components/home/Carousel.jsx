import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../images/image-1.avif" className="d-block w-100 carousel-image" alt="Test 1" />
          <div className="carousel-caption my-5 p-5 d-none d-md-block text-white" style={{ textAlign: 'left', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
            <h5 style={{ fontSize: '2.5rem' }}>Slide 1 Title</h5>
            <p style={{ fontSize: '1.5rem' }}>Some text describing Slide 1.</p>
            <button className="btn btn-primary" style={{ fontSize: '1.2rem' }}>Button 1</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../images/image-2.avif" className="d-block w-100 carousel-image" alt="Test 2" />
          <div className="carousel-caption my-5 p-5 d-none d-md-block text-white" style={{ textAlign: 'left', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
            <h5 style={{ fontSize: '2.5rem' }}>Slide 2 Title</h5>
            <p style={{ fontSize: '1.5rem' }}>Some text describing Slide 2.</p>
            <button className="btn btn-primary" style={{ fontSize: '1.2rem' }}>Button 2</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../images/image-3.avif" className="d-block w-100 carousel-image" alt="Test 3" />
          <div className="carousel-caption my-5 p-5 d-none d-md-block text-white" style={{ textAlign: 'left', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
            <h5 style={{ fontSize: '2.5rem' }}>Slide 3 Title</h5>
            <p style={{ fontSize: '1.5rem' }}>Some text describing Slide 3.</p>
            <button className="btn btn-primary" style={{ fontSize: '1.2rem' }}>Button 3</button>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
