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
      {heroData && (
        <HeroSection
          {...heroData[0]}
          textSize="large"
          textAlign="center"
          variant="white"
        />
      )}

      {/* Career Text Section for Professionals segment*/}
      {textData && textData.length >= 2 && (
        <TextSection
          variant="dark"
          {...textData[0]}
          link="Explore Careers"
          linkUrl="/career"
        />
      )}

      {/* Services Section */}
      {cardImageData?.length > 0 && (
        <ServicesSection
          title="Services"
          subtitle="We offer a wide variety of services"
          cardImageData={cardImageData}
          link="See all"
          linkUrl="/services"
        />
      )}

      {/* Customers Section */}
      {textImageData?.length ? (
        <section>
          <CustomerSection
            title={textImageData[0]?.title}
            text_short={textImageData[0]?.text_short}
            imageUrls={textImageData.map((item) => item.imageUrl)}
          />
        </section>
      ) : (
        <section>
          <p>No partner data available</p>
        </section>
      )}

      {/* Services Features Section */}
      {cardData?.length > 0 && (
        <CardsSection
          title="Our Expertise"
          subtitle="The sec­rets be­hind our agi­le web ser­vi­ces and web­si­tes"
          cardData={cardData}
          link="See more"
          linkUrl="/services"
        />
      )}

      {/* Text Section*/}
      {textData && (
        <section className="text-section text-section-2">
          <TextSection
            {...(textData.length >= 2 ? textData[1] : textData[0])}
          />
        </section>
      )}
    </div>
  );
};

export default Home;
