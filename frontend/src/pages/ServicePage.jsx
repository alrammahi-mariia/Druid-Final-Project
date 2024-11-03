import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import TextImageSection from "../components/TextImageSection";

const ServicePage = () => {
  const [heroData, setHeroData] = useState(null);
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:52824/jsonapi/node/servicesingle?include=field_hero,field_hero.field_image,field_section_1.field_text_image"
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

        // Filter image-text section data
        const section = data.included.find(
          (item) => item.type === "paragraph--image_text"
        );
        const sectionImage = data.included.find(
          (item) =>
            item.type === "file--file" &&
            item.id === section.relationships.field_image.data.id
        );

        setSectionData({
          title: section.attributes.field_title,
          text: section.attributes.field_text,
          imageUrl: sectionImage.attributes.uri.url,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {heroData && <HeroSection {...heroData} />}
      {sectionData && <TextImageSection {...sectionData} />}
    </div>
  );
};

export default ServicePage;
