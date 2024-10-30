const API_URL = "https://localhost:62786/jsonapi";

// Fetch service page data
export const fetchServicesData = async () => {
  const response = await axios.get(`${API_URL}/node/services`);
  return response.data;
};

// Fetch services cards
export const fetchServiceCards = async () => {
  const response = await axios.get(`${API_URL}/hero_section_data`);
  return response.data;
};
