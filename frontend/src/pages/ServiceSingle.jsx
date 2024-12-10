import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import TextImage from "../components/TextImage/TextImage";
import TextSection from "../components/TextSection/TextSection";

const ServiceSingle = () => {
  const { parentId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);

  const {
    serviceData: passedServiceData,
    heroData: passedHeroData,
    textData: passedTextData,
    textImageData: passedTextImageData,
  } = location.state || {};

  // Fetch data if we don't have passed state
  useEffect(() => {
    if (!passedServiceData) {
      dispatch(
        fetchPageContent({
          contentType: "servicesingle",
          includedFields: [
            "field_content, field_content.field_image,field_content.field_text_image",
          ],
          filters: {
            parent_id: parentId,
          },
        })
      );
    }
  }, [dispatch, parentId, passedServiceData]);

  if (loading && !passedServiceData) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Use passed data if available, otherwise use fetched data
  const serviceData = passedServiceData || data.servicesingle || {};

  const heroData = passedHeroData || serviceData.hero;
  const textData = passedTextData || serviceData.textData || [];
  const textImageData = passedTextImageData || serviceData.textImageData || [];

  console.log("Service Single Data:", {
    parentId,
    heroData,
    textData,
    textImageData,
    passedServiceData,
    location: location.state,
  });

  return (
    <div>
      {/* Hero Section */}
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
