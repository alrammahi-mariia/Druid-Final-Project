import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageContent } from "../store/contentSlice";
import HeroSection from "../components/HeroSection/HeroSection";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import TextSection from "../components/TextSection";

const ServiceSingle = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.content);
  const serviceSingleData = data.servicesingle || {};

  useEffect(() => {
    dispatch(
      fetchPageContent({
        contentType: "servicesingle",
        includedFields: [
          "field_content, field_content.field_image,field_content.field_text_image",
        ],
      })
    );
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log("Data from Redux", serviceSingleData);

  const { heroData, textData, textImageData } = serviceSingleData;

  return (
    <div>
      {serviceSingleData.heroData && <HeroSection {...heroData} />}
      {serviceSingleData.textImageData &&
        serviceSingleData.textImageData.map(
          (textImage, index) =>
            index === 0 && <TextImageLeft key={index} {...textImage} />
        )}
      {serviceSingleData.textData &&
        textData.map((text) => <TextSection key={text.id} {...text} />)}
      {serviceSingleData.textImageData &&
        serviceSingleData.textImageData.map(
          (textImage, index) =>
            index === 1 && <TextImageRight key={index} {...textImage} />
        )}
    </div>
  );
};

export default ServiceSingle;
