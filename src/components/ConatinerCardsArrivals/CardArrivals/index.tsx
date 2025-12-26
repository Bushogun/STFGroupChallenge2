import { PlusOutlined } from "@ant-design/icons";
import "./card-arrivals.css";
import { useState } from "react";
import SizeComponent from "../../SizeComponent";
import { BagAddOutline } from "../../../assets/bagAdd";

interface Hotspot {
  x: number;
  y: number;
  item: string;
}

interface CardProps {
  title: string;
  image: string;
  hotspots?: Hotspot[];
}

export default function CardArrivals({
  title,
  image,
  hotspots = [],
}: CardProps) {
  const [selectedSpot, setSelectedSpot] = useState<Hotspot | null>(null);

  const handleBuy = () => {
    console.log(`Comprar: ${title}`);
  };

  const handleAddToCart = (spot: Hotspot) => {
    console.log("Hotspot seleccionado:", spot);
    setSelectedSpot(spot);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <button className="buy-btn" onClick={handleBuy}>
          Comprar
        </button>
        <img src={image} className="card-image" alt={title} />

        {hotspots.map((spot, index) => (
          <div
            key={index}
            className="hotspot"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
            }}
            onClick={() => handleAddToCart(spot)}
          >
            <BagAddOutline />
          </div>
        ))}

        {selectedSpot && (
          <div
            className="size-wrapper"
            style={{
              left: `${selectedSpot.x}%`,
              top: `${selectedSpot.y + 5}%`, // un poco más abajo
            }}
          >
            <SizeComponent
              spot={selectedSpot}
              onClose={() => setSelectedSpot(null)}
              onSelectSize={(size) => {
                console.log("Item:", selectedSpot.item, "Talla:", size);
              }}
            />
          </div>
        )}
      </div>
      <div className="footer-card-title">Blusa manga corta espalda de anudar</div>
      <div className="footer-card-price">$ 279.900</div>
    </div>
  );
}
