import React from 'react';
import Carousel from '../../Slider/Carousel/carousel.component';
import './gallery.styles.scss';

const Gallery = () => {
  return (
    <div className='gallery'>
      <h2 className='gallery__title'>Gallery</h2>
      <Carousel />
      <div className='gallery__gradient'></div>
    </div>
  );
};

export default Gallery;
