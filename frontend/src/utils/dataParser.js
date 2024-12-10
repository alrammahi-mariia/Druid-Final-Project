export const processIncludedData = (included) => {
  const data = {
    heroData: [],
    cardData: [],
    testimonialData: [],
    featureData: [],
    textData: [],
    textImageData: [],
    cardImageData: [],
    fieldTags: [],
  };

  const userSegment = sessionStorage.getItem("currentSegment") || "";
  if (!userSegment) {
    sessionStorage.removeItem("currentSegment");
  }

  const showParagraph = (item) => {
    // Get the current segment value directly from sessionStorage each time
    const currentSegment = sessionStorage.getItem("currentSegment") || "";

    // If no segment field exists, show to everyone
    if (!item.attributes.field_mautic_segment) return true;

    // If userSegment is empty string, only show paragraphs with null segment or default segment
    if (currentSegment === "") {
      return (
        item.attributes.field_mautic_segment === null ||
        item.attributes.field_mautic_segment === "default"
      );
    }

    return (
      item.attributes.field_mautic_segment?.toLowerCase() ===
      currentSegment.toLowerCase()
    );
  };

  included.forEach((item) => {
    // Skip this paragraph if it shouldn't be shown based on segment
    if (item.type.startsWith("paragraph--") && !showParagraph(item)) {
      return;
    }

    switch (item.type) {
      case "paragraph--hero_paragraph":
        // const heroImage = included.find(
        //   (img) =>
        //     img.type === "file--file" &&
        //     img.id === item.relationships.field_image.data?.id
        // );

        data.heroData.push({
          title: item.attributes.field_title,
          description: item.attributes.field_description?.value,
          parentId: item.attributes.parent_id,
          // imageUrl: heroImage ? heroImage.attributes.uri.url : null,
        });
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
          : [];

        data.cardImageData.push({
          id: item.id,
          title: item.attributes.field_cardimg_title,
          text: item.attributes.field_cardimg_text?.processed,
          imageUrl:
            cardImageUrls.length === 1 ? cardImageUrls[0] : cardImageUrls,
          parentId: item.attributes.parent_id,
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
          link: item.attributes.field_text_link?.title,
          linkUrl: item.attributes.field_text_link?.uri,
          parentId: item.attributes.parent_id,
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
          : [];

        data.textImageData.push({
          id: item.id,
          title: item.attributes.field_section_title,
          text_long: item.attributes.field_text_long?.processed,
          text_short: item.attributes.field_text,
          imageUrl: imageUrls.length === 1 ? imageUrls[0] : imageUrls,
          parentId: item.attributes.parent_id,
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
          : [];

        data.featureData.push({
          text: item.attributes.field_feature_description,
          title: item.attributes.field_feature_title,
          imageUrl:
            featureImageUrls.length === 1
              ? featureImageUrls[0]
              : featureImageUrls,
        });
        break;

      case "file--file":
        if (!data.imageUrls) {
          data.imageUrls = [];
        }
        if (item.attributes.uri?.url) {
          data.imageUrls.push(item.attributes.uri.url);
        }
        break;

      // Handle field_tags
      case "taxonomy_term--tags":
        data.fieldTags.push({
          id: item.id,
          name: item.attributes.name,
        });
        break;

      default:
        break;
    }
  });

  return data;
};
