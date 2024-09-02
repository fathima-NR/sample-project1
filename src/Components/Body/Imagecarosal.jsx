import React, { useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './imagecarosal.css';

function ImageCarousel() {
  useEffect(() => {
    const splitText = (selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split('').map((char, index) =>
          char === ' ' ? '&nbsp;' : `<span style="animation-delay:${index * 0.09}s">${char}</span>`
        ).join('');
      });
    };

    splitText('h1');
  }, []);

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carosalimg"
          src="src/assets/Hospitality-scaled.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Update Your Home</h1>
          <p>Premium residential fit-out solution</p>
          <button className='captionbtn'>Request A Quote</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carosalimg"
          src="src/assets/Modern-Living-VillaF42.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Elevate your Interior</h1>
          <p>with our expert services</p>
          <button className='captionbtn'>Request A Quote</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carosalimg"
          src="src/assets/Restaurant00.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Best Interior Design </h1>
          <p>Customized interior design solution</p>
          <button className='captionbtn'>Request A Quote</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
