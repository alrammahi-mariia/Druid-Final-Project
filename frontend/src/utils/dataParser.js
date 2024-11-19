export const processIncludedData = (included) => {
  const data = {
    heroData: [],
    cardData: [],
    testimonialData: [],
    featureData: [],
    textData: [],
    textImageData: [],
    cardImageData: [],
  };

  const visibleItems = included.filter((item) =>
    item.type.startsWith("paragraph--")
      ? item.attributes.field_visibility === true ||
        item.attributes.field_visibility === 1
      : true
  );

  visibleItems.forEach((item) => {
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

      case "paragraph--card_image":
        const cardImages = item.relationships.field_card_image?.data
          ? included.filter(
              (img) =>
                img.type === "file--file" &&
                item.relationships.field_card_image.data.id === img.id
            )
          : [];

        const cardImageUrls = cardImages.length
          ? cardImages.map((img) => img.attributes.uri.url)
          : null;

        data.cardImageData.push({
          id: item.id,
          title: item.attributes.field_cardimg_title,
          text: item.attributes.field_cardimg_text.processed,
          imageUrl:
            cardImageUrls.length === 1 ? cardImageUrls[0] : cardImageUrls,
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
          text: item.attributes.field_section_text?.processed,
          title: item.attributes.field_text_title,
        });
        break;

      case "paragraph--text_image":
        const sectionImages = item.relationships.field_text_image?.data
          ? included.filter(
              (img) =>
                img.type === "file--file" &&
                item.relationships.field_text_image.data.id === img.id
            )
          : [];

        const imageUrls = sectionImages.length
          ? sectionImages.map((img) => img.attributes.uri.url)
          : null;

        data.textImageData.push({
          id: item.id,
          title: item.attributes.field_section_title,
          text_long: item.attributes.field_text_long?.processed,
          text_short: item.attributes.field_text,
          imageUrl: imageUrls.length === 1 ? imageUrls[0] : imageUrls,
        });
        break;

      case "paragraph--feature":
        const featureImages = item.relationships.field_feature_image?.data
          ? included.filter(
              (img) =>
                img.type === "file--file" &&
                item.relationships.field_feature_image.data.id === img.id
            )
          : [];
        const featureImageUrls = featureImages.length
          ? featureImages.map((img) => img.attributes.uri.url)
          : null;

        data.featureData.push({
          text: item.attributes.field_feature_description,
          title: item.attributes.field_feature_title,
          imageUrl:
            featureImageUrls.length === 1
              ? featureImageUrls[0]
              : featureImageUrls,
        });
        break;

      default:
        break;
    }
  });

  return data;
};
