import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import TextSection from "../components/TextSection/TextSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import CustomerSection from "../components/CustomerSection/CustomerSection";
import CardsSection from "../components/CardsSection/CardsSection";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const homeData = data.home || {};

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "home",
        includedFields: [
          "field_home_content",
          "field_home_content.field_image",
          "field_home_content.field_card_image",
          "field_home_content.field_text_image",
        ],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { heroData, cardData, textData, cardImageData, textImageData } =
    homeData;

  return (
    <div>
      {/* Hero section */}
      {homeData.heroData && (
        <HeroSection {...heroData} variant="white" textSize="large" />
      )}

      {/* Career Text Section for Professionals segment*/}
      {homeData.textData && <TextSection variant="dark" {...textData[0]} />}

      {/* Services Section */}
      <ServicesSection
        title="Services"
        subtitle="We offer a wide variety of services"
        cardImageData={cardImageData}
        link="See all"
        linkUrl="/services"
      />

      {/* Customers Sections (Pass only title and all imageUrls) */}
      {homeData.textImageData?.length ? (
        <section>
          <CustomerSection
            title={homeData.textImageData[0]?.title}
            imageUrls={homeData.textImageData.map((item) => item.imageUrl)}
          />
        </section>
      ) : (
        <section>
          <p>No partner data available</p>
        </section>
      )}

      {/* Services Features Section */}
      <CardsSection
        title="Our Expertise"
        subtitle="The sec­rets be­hind our agi­le web ser­vi­ces and web­si­tes"
        cardData={cardData}
        link="See more"
        linkUrl="/services"
      />

      {/* Text Section*/}
      {homeData.textData && (
        <section className="text-section text-section-2">
          <TextSection {...textData[1]} />
        </section>
      )}
    </div>
  );
};

export default Home;
