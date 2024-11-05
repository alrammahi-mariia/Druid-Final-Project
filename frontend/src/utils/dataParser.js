export const processIncludedData = (included) => {
  const data = {
    heroData: null,
    cardData: [],
    testimonialData: null,
    // Add other sections you may need here
  };

  included.forEach((item) => {
    switch (item.type) {
      case "paragraph--hero_paragraph":
        // Process hero paragraph
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
        // Process card paragraphs
        data.cardData.push({
          id: item.id,
          title: item.attributes.field_card_title,
          text: item.attributes.field_card_description,
          // Add more fields if necessary
        });
        break;

      case "paragraph--testimonial":
        // Process testimonial paragraph
        data.testimonialData = {
          text: item.attributes.field_testimonial,
          author: item.attributes.field_author,
        };
        break;

      // Add cases for other paragraph types as needed
      default:
        break;
    }
  });

  return data;
};
