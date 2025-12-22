import { useTabContext } from "../TabContext";
import "../CardsClothes";
import CardClothes from "../CardsClothes";

interface Props {
  data: {
    "images-mujeres": string[];
    "images-hombres": string[];
  };
  isMobile: boolean;
}

export default function GenderCardClothes({ data, isMobile }: Props) {
  const { gender } = useTabContext();

  const images =
    gender === "hombres"
      ? data["images-hombres"]
      : data["images-mujeres"];

  return <CardClothes images={images} isMobile={isMobile} />;
}
