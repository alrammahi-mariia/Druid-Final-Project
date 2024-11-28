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

  const userSegment = sessionStorage.getItem("currentSegment");

  const showParagraph = (item) => {
    // If no segment field or segment value is null, show to everyone
    if (
      !item.attributes.field_segment ||
      item.attributes.field_segment === null
    )
      return true;
    // If segment matches user segment, show it
    return item.attributes.field_segment === userSegment;
  };

  included.forEach((item) => {
    // Skip this paragraph if it shouldn't be shown based on segment
    if (item.type.startsWith("paragraph--") && !showParagraph(item)) {
      return;
    }

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
        // Find associated images if they exist (returns an array or null)
        const sectionImages = item.relationships.field_text_image?.data
          ? included.filter(
              (img) =>
                img.type === "file--file" &&
                item.relationships.field_text_image.data.id === img.id
            )
          : [];

        // Get the URL(s) for images: if only one image is needed, take the first; otherwise, map all URLs
        const imageUrls = sectionImages.length
          ? sectionImages.map((img) => img.attributes.uri.url)
          : null;

        data.textImageData.push({
          id: item.id,
          title: item.attributes.field_section_title,
          text_long: item.attributes.field_text_long?.processed,
          text_short: item.attributes.field_text,
          // If only one image is needed, use `imageUrls[0]`; if all are needed, use `imageUrls`
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

      case "file--file":
        if (!data.imageUrls) {
          data.imageUrls = [];
        }
        if (item.attributes.uri?.url) {
          data.imageUrls.push(item.attributes.uri.url);
        }
        break;

      default:
        break;
    }
  });

  return data;
};
