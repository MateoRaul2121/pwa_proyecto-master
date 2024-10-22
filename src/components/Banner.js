import React from 'react';
import '../styles/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src="/images/banner.jpg" alt="Promoción" className="banner-img" />
      <div className="banner-text">
        <h1>Bienvenido a Clean Store</h1>
        <p>Encuentra los mejores productos de limpieza aquí.</p>
      </div>
    </div>
  );
}

export default Banner;