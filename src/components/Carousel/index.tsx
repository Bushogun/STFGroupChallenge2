import { useEffect, useState, useRef } from "react";
import "./carousel.css";

interface CarouselProps {
  images: string[];
  titles?: string[];
  interval?: number;
  isMobile?: boolean;
  showArrows?: boolean;
  showDoks?: boolean;
}

export default function Carousel({
  images,
  titles = [],
  interval = 3000,
  isMobile = false,
  showArrows = false,
  showDoks = true,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => resetTimeout();
  }, [current, images.length, interval]);

  const goToSlide = (index: number) => setCurrent(index);

  const goNext = () => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="carousel"
      style={{ height: isMobile ? "85vh" : "100vh" }}
    >
      {!isMobile && titles.length === images.length && (
        <div className="carousel-titles-overlay">
          {titles.map((title, i) => (
            <span
              key={i}
              className={`carousel-title ${current === i ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            >
              {title}
            </span>
          ))}
        </div>
      )}

      {/* DOTS (mobile) */}
      {isMobile && images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${current === i ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      )}

      {showArrows && images.length > 1 && (
        <>
          <button className="carousel-arrow left" onClick={goPrev}>
            ‹
          </button>
          <button className="carousel-arrow right" onClick={goNext}>
            ›
          </button>
        </>
      )}

      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="carousel-item" key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              style={{ height: "100vh" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
