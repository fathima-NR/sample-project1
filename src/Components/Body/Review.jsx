import React, { useState, useEffect, useRef } from 'react';
import './review.css';

function Review() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const testimonials = [
    {
      paragraph: "Working with Falcon Interior Decoration LLC has been an absolute pleasure. Their team of skilled professionals exceeded my expectations, and have offered me cutting-edge solutions and exceptional customer service. I am thrilled with the results and I look forward to working with you again soon🤗",
      author: "Rim Taher Jouini"
    },
    {
      paragraph: "Falcon Interior Decoration LLC transformed our workspace into a functional and aesthetically pleasing environment. Their attention to detail and dedication to quality is truly commendable. The project was completed on time, and the results speak for themselves.",
      author: "John Doe"

    },
    {
        paragraph:"Choosing Falcon Interior Decoration LLC was one of the best decisions I’ve made. Their commitment to excellence and customer satisfaction is evident in every aspect of their work. The end result was not only beautiful but perfectly tailored to our needs. I’m looking forward to our next project together! 🎉",
         author: "Ariana"
    },
    {
        paragraph:"Falcon Interior Decoration LLC delivered a flawless experience from start to finish. Their team’s innovative approach and dedication to perfection exceeded my expectations. The final result is a testament to their skill and professionalism. I’m eager to see what we can create together next time! 🌈",
         author: "John James"
    }
    // Add more testimonials as needed
  ];
  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingPosition = headingRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (headingPosition < windowHeight) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    if (contentRef.current && imageRef.current) {
      const contentRect = contentRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();

      // Check if the elements are within the viewport
      if (contentRect.top < window.innerHeight && contentRect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="review-container">
      <div className="row  mt-5">
        <div className="col-sm-6">
          <div
            className={`content-box ${isVisible ? 'animate-left' : ''}`}
            ref={contentRef}
          >
          <div
        className={`heading-section ${animate ? 'animate' : ''}`}
        ref={headingRef}
      >
        <h4 className='text-start pt-5 ms-4' style={{color:"#cd9a61"}}>[testimonials]</h4>
        <h1 className='text-start ms-4' style={{color:"white"}}>What people Says</h1> 
        <h5  className='text-start mb-5 ms-4 ' style={{color:"white"}}>..............</h5>
      </div>
            <p className='mx-5'>
              {testimonials[currentIndex].paragraph}
            </p>
            <h4 className='mt-4 text-start pb-3 ms-5'>
              {testimonials[currentIndex].author}
            </h4>
            <div className="button-container">
              <button className="prev-btn" onClick={handleNext}>-</button>
              <button className="next-btn ms-2" onClick={handleNext}>+</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <img
            src="src\assets\member6.webp"
            alt="Review"
            className={`image ${isVisible ? 'animate-right' : ''}`}
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
