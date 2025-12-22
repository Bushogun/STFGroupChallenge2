import { useTabContext } from "../TabContext";
import ContainerCards from "../ConatinerCardsArrivals";

interface Props {
  data: {
    "images-mujeres": any[];
    "images-hombres": any[];
  };
  isMobile: boolean;
}

export default function GenderActionCardClothes({ data, isMobile }: Props) {
  const { gender } = useTabContext();

  const items =
    gender === "mujeres"
      ? data["images-mujeres"]
      : data["images-hombres"];

  return <ContainerCards items={items} isMobile={isMobile} />;
}
