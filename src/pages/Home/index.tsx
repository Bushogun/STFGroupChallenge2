import Layout from "../../components/Layout";
import useIsMobile from "../../hooks/useIsMobile";
import Carousel from "../../components/Carousel";
import slider from "../../data/slider-web-dynamic-1.json";
import slider2 from "../../data/slider-web-dynamic-2.json";
import slider3 from "../../data/slider-web-dynamic-3.json";
import ActionCards from "../../data/action-cards.json";
import cards from "../../data/cards.json";
import TabContext from "../../components/TabContext";
import GenderCarousel from "../../components/GenderCarousel";
import GenderCardClothes from "../../components/GenderCardClothes";
import GenderActionCardClothes from "../../components/GenderActionCardClothes";
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
        <TabContext >

          <section style={{ marginTop: "2rem" }}>
            <GenderCardClothes data={cards} isMobile={isMobile} />
          </section>

          <section style={{ marginTop: "2rem" }}>
            <GenderCarousel
              data={slider3}
              isMobile={isMobile}
              showArrows={true}
              showDoks={false}
            />
          </section>

          <section style={{ marginTop: "2rem" }}>
            <GenderActionCardClothes data={ActionCards} isMobile={isMobile}/>
          </section>

        </TabContext>
      </section>
    </Layout>
  );
}

export default Home;
