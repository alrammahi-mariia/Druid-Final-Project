import React, { useEffect, useState } from "react";
import { fetchHeroParagraph } from "../services/api_services";
import { API_URL } from "../services/api_services";
import { Image } from "react-bootstrap";

const HeroSection = ({ parentId }) => {
  const [heroData, setHeroData] = useState(null);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHeroParagraph();
      const filteredData = data.data.find(
        (paragraph) => paragraph.attributes.parent_id === parentId
      );
      const images = data.included;
      console.log(images);
      console.log(filteredData);
      setHeroData(filteredData);

      setImageData(images);
    };

    fetchData();
  }, [parentId]);

  if (!heroData) return null;

  return (
    <div>
      <Image
        src={`${API_URL}${imageData[0].attributes.uri.url}`}
        fluid
        className="w-100 hero-image"
      />
      <h1>{heroData.attributes.field_title}</h1>
      <div
        className="lead"
        dangerouslySetInnerHTML={{
          __html: heroData.attributes.field_description.value,
        }}
      />
    </div>
  );
};

export default HeroSection;
