import React from 'react';

const Carousel = () => {
  const captionStyle = {
    textAlign: 'left',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    left: '5%', // Adjust the left position as needed
    bottom: '2.5%', // Adjust the bottom position as needed
    width: '80%', // Adjust the width as needed
  };

  const titleStyle = {
    fontSize: '2.5rem',
  };

  const textStyle = {
    fontSize: '1.5rem',
  };

  const buttonStyle = {
    fontSize: '1.2rem',
  };

  return (
    <div>
      <div id="carouselExample" className="carousel slide my-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/image-1.avif" className="d-block w-100 carousel-image" alt="Test 1" />
            <div className="carousel-caption mt-5 mb-1 p-1 d-none d-md-block text-white" style={captionStyle}>
              <h5 style={titleStyle}>Slide 1 Title</h5>
              <p style={textStyle}>Some text describing Slide 1.</p>
              <button className="btn btn-outline-info" style={buttonStyle}>Button 1</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/image-2.avif" className="d-block w-100 carousel-image" alt="Test 2" />
            <div className="carousel-caption mt-5 mb-1 p-1 d-none d-md-block text-white" style={captionStyle}>
              <h5 style={titleStyle}>Slide 2 Title</h5>
              <p style={textStyle}>Some text describing Slide 2.</p>
              <button className="btn btn-outline-info" style={buttonStyle}>Button 2</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/image-3.avif" className="d-block w-100 carousel-image" alt="Test 3" />
            <div className="carousel-caption mt-5 mb-1 p-1 d-none d-md-block text-white" style={captionStyle}>
              <h5 style={titleStyle}>Slide 3 Title</h5>
              <p style={textStyle}>Some text describing Slide 3.</p>
              <button className="btn btn-outline-info" style={buttonStyle}>Button 3</button>
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
      <p className="fw-bold fs-5 text-center text-dark">Delivery Service Available Through Skip The Dishes And Uber</p>
    </div>
    

  );
};

export default Carousel;
