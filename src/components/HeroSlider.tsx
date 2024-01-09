import { useEffect, useState } from "react";
import { HeroSlide } from "../data";
import { Link } from "react-router-dom";

type HeroSliderProps = {
  slides: HeroSlide[];
};

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showNextSlide = () => {
    setSlideIndex((index) => {
      if (index === slides.length - 1) return 0;
      return index + 1;
    });
  };

  const handleMouse = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!isPaused) {
        showNextSlide();
      } else {
        clearInterval(interval);
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <section
      aria-label="Hero Slider"
      className="hero__slider"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <a href="#after-hero-slider" className="skip-link visually-hidden">
        Skip Hero Slider Controls
      </a>
      <div className="hero__slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="hero__slide"
            style={{
              backgroundImage: `url(${slide.img})`,
              transform: `translateY(${-100 * slideIndex}%)`,
              opacity: slideIndex === index ? "1" : "0",
            }}
          >
            <div
              className="hero__text"
              style={{ display: slideIndex === index ? "block" : "none" }}
            >
              <h1 className="hero__heading">{slide.heading}</h1>
              <p className="hero__body">{slide.body}</p>
              <Link className="hero__link" to="/artex/portfolio">
                View Projects
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="hero__slider-btns">
        {slides.map((slide, index) => (
          <button
            className={`hero__slider-btn ${
              index === slideIndex ? "active" : ""
            }`}
            key={slide.id}
            onClick={() => setSlideIndex(index)}
            aria-label={`View Slide ${index + 1}`}
          >
            <span aria-hidden>{"0" + (index + 1)}</span>
          </button>
        ))}
      </div>
      <div id="after-hero-slider" />
    </section>
  );
};

export default HeroSlider;
