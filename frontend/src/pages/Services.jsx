import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import { URL } from "../services/api_services";

const Services = () => {
  const [heroData, setHeroData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${URL}/jsonapi/node/services?include=field_services_content,field_services_content.field_image`
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

        // Filter cards data
        const cards = data.included
          .filter((card) => card.type === "paragraph--card")
          .map((card) => {
            return {
              id: card.id,
              title: card.attributes.field_card_title,
              text: card.attributes.field_card_description,
            };
          });

        setCardData(cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {heroData && <HeroSection {...heroData} />}
      {cardData &&
        cardData.map((card) => <CardComponent key={card.id} {...card} />)}
    </div>
  );
};

export default Services;
