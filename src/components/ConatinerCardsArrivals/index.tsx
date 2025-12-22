import { useState } from "react";
import CardArrivals from "./CardArrivals";
import "./container-cards-arrivals.css";

interface CardData {
  title: string;
  image: string;
  description?: string;
  price?: number;
  reference?: string;
  hotspots?: { x: number; y: number; item: string }[];
}

interface ContainerCardsProps {
  items: CardData[];
  isMobile?: boolean;
}

export default function ContainerCards({
  items,
  isMobile = false,
}: ContainerCardsProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < items.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

return (
  <div className={`cards-container ${isMobile ? "mobile" : ""}`}>
    {isMobile && (
      <div className="carousel-viewport">
        {/* OVERLAY */}
        {current > 0 && (
          <button className="nav-btn left" onClick={prev}>
            ‹
          </button>
        )}

        {current < items.length - 1 && (
          <button className="nav-btn right" onClick={next}>
            ›
          </button>
        )}

        {/* CARRUSEL */}
        <div
          className="mobile-carousel"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="mobile-item">
              <CardArrivals
                title={item.title}
                image={item.image}
                hotspots={item.hotspots}
              />
            </div>
          ))}
        </div>
      </div>
    )}

    {!isMobile && (
      <div className="cards-grid">
        {items.map((item, i) => (
          <CardArrivals
            key={i}
            title={item.title}
            image={item.image}
            hotspots={item.hotspots}
          />
        ))}
      </div>
    )}
  </div>
);
}
