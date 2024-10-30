// Fetch hero and section data
export const fetchHeroSectionData = async () => {
  const response = await axios.get(
    "https://localhost:62786/jsonapi/hero_section_data"
  );
  return response.data;
};

// Fetch services cards
export const fetchServiceCards = async () => {
  const response = await axios.get(
    "https://localhost:62786/jsonapi/service_cards"
  );
  return response.data;
};
