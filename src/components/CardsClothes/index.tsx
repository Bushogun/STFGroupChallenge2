import "./card-clothes.css"

interface Props {
  images: string[];
  isMobile: boolean;
}

export default function CardClothes({ images, isMobile }: Props) {
  return (
    <div className="card-clothes">
      {images.slice(0, 3).map((img, index) => (
        <div className="card-clothe" key={index}>
          <img src={img} alt={`clothe-${index}`} style={{ width: "466px", height: "631px", objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}
