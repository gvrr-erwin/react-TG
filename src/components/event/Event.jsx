import React, { useState, useEffect } from 'react';
import './Event.css';
import eventImage1 from '../../assets/event-1.png';
import eventImage2 from '../../assets/event-2.png';

export const Event = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      image: eventImage1,
      title: 'Graduation Party',
      description:
        "Celebrate your graduation in style with Tambayan Grill's exceptional catering services. Whether it's a small gathering or a big celebration, we're here to make your graduation party truly special. Enjoy our authentic Filipino dishes, carefully prepared and delivered with the unique Tambayan Grill touch. Let us handle the details while you enjoy this milestone with your loved ones. Make your graduation party a memorable and delicious success with Tambayan Grill."
    },
    {
      image: eventImage2,
      title: 'Birthday Celebration',
      description:
        "At Tambayan Grill, we specialize in mouthwatering Filipino cuisine and offer outstanding catering services for birthday events. Our dedicated team ensures each celebration is memorable with our fresh, delicious dishes and warm Filipino hospitality. Trust Tambayan Grill to make your next birthday event a flavorful and unforgettable experience. "
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + events.length) % events.length);
  };

  const { image, title, description } = events[currentSlide];

  return (
    <div id="event">
      <div className="event">
        <div className="event-header">
          <h1>Events</h1>
          <h2>Tambayan Grill Events</h2>
        </div>
        <div className="event-content">
          <button className="event-btn event-btn-left" onClick={handlePrev}>
            ❮
          </button>
          <div className="event-image">
            <img src={image} alt={title} />
          </div>
          <div className="event-details">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <button className="event-btn event-btn-right" onClick={handleNext}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};
