import { useState, useEffect } from "react";
import slide1 from "../../assets/newSlide1.png";
import slide2 from "../../assets/newSlide2.png";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Recruitment & HR Solutions for Growing Businesses",
      desc: "Helping you hire the right talent faster and build a strong workforce.",
      image: slide1,
    },
    {
      title: "Expert HR Solutions for Growing Businesses",
      desc: "Helping You Hire the Right Talent, Faster and Smarter.",
      image: slide2,
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div
        className="hero-slider"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="hero-slide"
            key={index}
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="container hero-inner">
              {/* LEFT CONTENT */}
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>

                <div className="hero-buttons">
                  <button className="btn-primary">
                    Human Resource Services »
                  </button>
                  <button className="btn-outline">View Services »</button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hero-visual">
                <img src={slide.image} alt="Hero Slide" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
