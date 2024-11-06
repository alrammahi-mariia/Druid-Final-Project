export const processIncludedData = (included) => {
  const data = {
    heroData: [],
    cardData: [],
    testimonialData: [],
    featureData: [],
    textData: [],
  };

  included.forEach((item) => {
    switch (item.type) {
      case "paragraph--hero_paragraph":
        const heroImage = included.find(
          (img) =>
            img.type === "file--file" &&
            img.id === item.relationships.field_image.data?.id
        );

        data.heroData = {
          title: item.attributes.field_title,
          description: item.attributes.field_description?.value,
          imageUrl: heroImage ? heroImage.attributes.uri.url : null,
        };
        break;

      case "paragraph--card":
        data.cardData.push({
          id: item.id,
          title: item.attributes.field_card_title,
          text: item.attributes.field_card_description,
        });

        break;

      case "paragraph--testimonial":
        data.testimonialData = {
          text: item.attributes.field_testimonial,
          author: item.attributes.field_author,
        };
        break;

      case "paragraph--text":
        data.textData.push({
          text: item.attributes.field_section_text.processed,
          title: item.attributes.field_text_title,
        });
        break;

      case "paragraph--feature":
        const featureImages = included.filter(
          (img) =>
            img.type === "file--file" &&
            img.id === item.relationships.field_feature_image?.id
        );
        // Check if featureImages array has any items and use the first image if it exists
        let imageUrl = null;
        if (
          featureImages.length > 0 &&
          featureImages[0].attributes &&
          featureImages[0].attributes.uri
        ) {
          imageUrl = featureImages[0].attributes.uri.url; // Assuming the correct path is uri.url
        }
        data.featureData.push({
          text: item.attributes.field_feature_description,
          title: item.attributes.field_feature_title,
          imageUrl: imageUrl,
        });
        break;

      default:
        break;
    }
  });

  return data;
};
