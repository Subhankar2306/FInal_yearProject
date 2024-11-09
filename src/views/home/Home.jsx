import React from 'react';
import Slider from 'react-slick'; // Import React Slick for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  // user fetch er logic 


  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to FastTrack Car Booking </h1>
        <p className="hero-subtitle">Book your dream car with ease and enjoy a premium ride.</p>
        
        {/* Carousel for Offers */}
        <Slider {...carouselSettings} className="offer-carousel">
          <div className="carousel-slide">🎉 20% off on all SUVs! Book now for this limited-time offer!</div>
          <div className="carousel-slide">🚗 Enjoy free upgrades for weekend bookings!</div>
          <div className="carousel-slide">🌟 Special discounts for first-time users!</div>
        </Slider>

        <button className="book-now-btn">Book Now</button>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2 className="section-title">Latest Blogs</h2>
        <div className="blogs">
          <article className="blog-card">
            <h3>Top 5 Cars for Long Drives</h3>
            <p>Explore the best cars to take on long drives for comfort and style.</p>
          </article>
          <article className="blog-card">
            <h3>Why Rent a Car for Your Next Road Trip?</h3>
            <p>Learn why renting a car can be the most convenient choice for your travels.</p>
          </article>
          <article className="blog-card">
            <h3>Choosing the Right Car Rental Plan</h3>
            <p>Find out how to pick a car rental plan that meets your needs and budget.</p>
          </article>
        </div>
      </section>

      {/* Feedback Section with Improved Design */}
      <section className="feedback-section">
        <h2 className="section-title">Customer Feedback</h2>
        <div className="feedback-cards">
          <div className="feedback-card">
            <img src="https://via.placeholder.com/80" alt="User 1" className="user-avatar" />
            <div className="feedback-content">
              <p className="user-feedback">"Excellent service, highly recommended!"</p>
              <span className="user-name">- John D.</span>
            </div>
          </div>
          <div className="feedback-card">
            <img src="https://via.placeholder.com/80" alt="User 2" className="user-avatar" />
            <div className="feedback-content">
              <p className="user-feedback">"The booking process was smooth and quick."</p>
              <span className="user-name">- Sarah M.</span>
            </div>
          </div>
          <div className="feedback-card">
            <img src="https://via.placeholder.com/80" alt="User 3" className="user-avatar" />
            <div className="feedback-content">
              <p className="user-feedback">"Affordable rates with premium cars!"</p>
              <span className="user-name">- Alex R.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Car Models Slider */}
      <section className="car-slider-section">
        <h2 className="section-title">Our Popular Cars</h2>
        <div className="car-slider">
          <div className="car-card">SUV Model</div>
          <div className="car-card">Sedan Model</div>
          <div className="car-card">Convertible Model</div>
          <div className="car-card">Hatchback Model</div>
        </div>
      </section>
    </>
  );
}

export default Home;
