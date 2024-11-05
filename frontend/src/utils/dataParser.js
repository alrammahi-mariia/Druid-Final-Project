export const processIncludedData = (included) => {
  const data = {
    heroData: null,
    cardData: [],
    testimonialData: null,
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

      default:
        break;
    }
  });

  return data;
};
