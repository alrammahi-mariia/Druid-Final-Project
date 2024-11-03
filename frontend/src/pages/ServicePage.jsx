import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import TextImageSection from "../components/TextImageSection";
import TextSection from "../components/TextSection";

const ServicePage = () => {
  const [heroData, setHeroData] = useState([]);
  const [sectionData, setSectionData] = useState([]);
  const [textSectionData, setTextSectionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:52824/jsonapi/node/servicesingle?include=field_content,field_content.field_image,field_content.field_text_image"
        );
        const data = await response.json();
        console.log(data);

        // Filter hero data
        const hero = data.included.find(
          (item) => item.type === "paragraph--hero_paragraph"
        );
        const heroImage = data.included.find(
          (item) =>
            item.type === "file--file" &&
            item.id === hero.relationships.field_image.data.id
        );

        setHeroData({
          title: hero.attributes.field_title,
          description: hero.attributes.field_description.value,
          imageUrl: heroImage.attributes.uri.url,
        });

        // Filter image-text section data and include image URLs
        const sections = data.included
          .filter((item) => item.type === "paragraph--text_image")
          .map((section) => {
            // Check if field_text_image.data exists and has an ID
            const sectionImage = section.relationships.field_text_image.data
              ? data.included.find(
                  (item) =>
                    item.type === "file--file" &&
                    item.id === section.relationships.field_text_image.data?.id
                )
              : null;

            return {
              id: section.id,
              title: section.attributes.field_section_title,
              text: section.attributes.field_text.value,
              imageUrl: sectionImage ? sectionImage.attributes.uri.url : null,
            };
          });
        setSectionData(sections);

        // Filter text sections data
        const textSections = data.included
          .filter((item) => item.type === "paragraph--text")
          .map((text) => {
            return {
              id: text.id,
              title: text.attributes.field_text_title,
              text: text.attributes.field_section_text.value,
            };
          });

        setTextSectionData(textSections);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {heroData && <HeroSection {...heroData} />}
      {textSectionData &&
        textSectionData.map((text) => <TextSection key={text.id} {...text} />)}
      {sectionData &&
        sectionData.map((section) => (
          <TextImageSection key={section.id} {...section} />
        ))}
    </div>
  );
};

export default ServicePage;
