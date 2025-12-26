import { useState } from "react";
import "./size-component.css";
import { ShoppingOutlined } from "@ant-design/icons";

interface SizeComponentProps {
  spot: {
    item: string;
  };
  onClose: () => void;
  onSelectSize: (size: string) => void;
}

export default function SizeComponent({
  spot,
  onClose,
  onSelectSize,
}: SizeComponentProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = [ "36", "37", "38", "39", "40", "41", "42"];

  const handleConfirm = () => {
    if (!selectedSize) return;
    onSelectSize(selectedSize);
    onClose();
  };

  return (
    <div className="size-container">
      <div className="size-container-flex">
      <div className="title-size"></div>
      <div className="subtitle-size">{spot.item}</div>
      <div className="subtitle-size">Ref: DF43839</div>

        <div className="size-chart">
          {/* {sizes.map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))} */}
        </div>
      </div>
      {/* <div className="blankspace">&nbsp;</div> */}

    </div>
  );
}
