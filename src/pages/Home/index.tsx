import { TikTokFilled, InstagramOutlined } from "@ant-design/icons";
import Layout from "../../components/Layout";
import useIsMobile from "../../hooks/useIsMobile";
import Carousel from "../../components/Carousel";
import slider from "../../data/slider-web-dynamic-1.json";
import slider2 from "../../data/slider-web-dynamic-2.json";
import slider3 from "../../data/slider-web-dynamic-3.json";
import ContainerCards from "../../components/ConatinerCardsArrivals";
import AlbumSession from "../../components/AlbumSession";
import DynamicCarousel from "../../components/DynamicCarousel/index";
import ContainerMomentsCards from "../../components/ContainerCardsMoments";
import TabContext from "../../components/TabContext";
import GenderCarousel from "../../components/GenderCarousel";
import "./home.css";

function Home() {
  const isMobile = useIsMobile();
  const images = slider.slides.map((s) => s.image);
  const titles = slider.slides.map((s) => s.title);
  const images2 = slider2.images;

  return (
    <Layout>
      <section>
        <Carousel
          images={images}
          titles={titles}
          isMobile={isMobile}
          showArrows={false}
          showDoks={false}
        />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <Carousel
          images={images2}
          isMobile={isMobile}
          showArrows={true}
          showDoks={false}
        />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <TabContext>

          <section style={{ marginTop: "2rem" }}>
            {/* <Cards  */}
          </section>

          <section style={{ marginTop: "2rem" }}>
            <GenderCarousel
              data={slider3}
              isMobile={isMobile}
              showArrows={false}
              showDoks={false}
            />
          </section>

          <section style={{ marginTop: "2rem" }}>
            {/* <Cards  */}
          </section>
          
        </TabContext>
      </section>
    </Layout>
  );
}

export default Home;
