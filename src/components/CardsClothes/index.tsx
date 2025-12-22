import { useEffect, useState } from "react";
import "./card-clothes.css";

interface Props {
  images: string[];
  isMobile?: boolean;
}



export default function CardClothes({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
useEffect(() => {
  const onResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);
  const next = () => {
    if (current < images.length - 1) setCurrent((c) => c + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  return (
    <div className={`cards-container ${isMobile ? "mobile" : ""}`}>
      {isMobile && current > 0 && (
        <button className="nav-btn left" onClick={prev}>
          ‹
        </button>
      )}

      <div
        className={isMobile ? "mobile-carousel" : "cards-grid"}
        style={
          isMobile
            ? { transform: `translateX(-${current * 100}%)` }
            : undefined
        }
      >
        {images.map((img, i) => (
          <div key={i} className={isMobile ? "mobile-item" : "card-clothe"}>
            <img src={img} alt={`clothe-${i}`} />
          </div>
        ))}
      </div>

      {isMobile && current < images.length - 1 && (
        <button className="nav-btn right" onClick={next}>
          ›
        </button>
      )}
    </div>
  );
}
