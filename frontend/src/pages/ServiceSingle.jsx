import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import TextImage from "../components/TextImage/TextImage";
import TextSection from "../components/TextSection/TextSection";

const ServiceSingle = () => {
  const location = useLocation();

  const {
    serviceData: passedServiceData,
    heroData: passedHeroData,
    textData: passedTextData,
    textImageData: passedTextImageData,
  } = location.state || {};

  const serviceData = passedServiceData || {};

  const heroData = passedHeroData || serviceData.hero;
  const textData = passedTextData || serviceData.textData || [];
  const textImageData = passedTextImageData || serviceData.textImageData || [];

  return (
    <div>
      {heroData && (
        <HeroSection {...heroData} textSize="small" variant="light" />
      )}

      {textImageData &&
        textData &&
        textImageData.map((textImage, index) => (
          <div key={`section-${textImage.id}-${index}`}>
            <TextImage
              {...textImage}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
            {textData[index] && <TextSection {...textData[index]} />}
          </div>
        ))}

      {textData &&
        textData
          .slice(textImageData?.length || 0)
          .map((text) => <TextSection key={`text-${text.id}`} {...text} />)}
    </div>
  );
};

export default ServiceSingle;
