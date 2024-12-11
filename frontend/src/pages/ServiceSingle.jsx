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
          <>
            <TextImage
              key={`textImage-${textImage.id}-${index}`}
              {...textImage}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
            {textData[index] && (
              <TextSection
                key={`text-${textData[index].id}`}
                {...textData[index]}
              />
            )}
          </>
        ))}

      {textData &&
        textData
          .slice(textImageData?.length || 0)
          .map((text) => <TextSection key={`text-${text.id}`} {...text} />)}
    </div>
  );
};

export default ServiceSingle;
