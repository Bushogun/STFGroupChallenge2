import Carousel from "../Carousel";
import { useTabContext } from "../TabContext";

interface Props {
  data: {
    "images-mujeres": string[];
    "images-hombres": string[];
  };
  isMobile: boolean;
  showArrows?: boolean;
  showDoks?: boolean;
}

export default function GenderCarousel({ data, isMobile, showArrows, showDoks }: Props) {
  const { gender } = useTabContext();

  const images =
    gender === "hombres"
      ? data["images-mujeres"]
      : data["images-hombres"];

  return (
    <Carousel
      images={images}
      isMobile={isMobile}
      showArrows={showArrows}
      showDoks={showDoks}
    />
  );
}
