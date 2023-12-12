import React from 'react';

const Brands = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <img
            src=".../../images/franks.png"
            alt="Franks Brewery"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <img
            src=".../../images/walkerville-brew.png"
            alt="Walkerville Brewery"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
