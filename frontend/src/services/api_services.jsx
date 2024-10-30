import axios from "axios";

const API_URL = "https://localhost:62786/jsonapi";

// Fetch service page data
export const fetchServicesData = async () => {
  const response = await axios.get(
    `${API_URL}/node/services?include=field_hero_img&fields[file--file]=uri,url`
  );
  return response.data;
};

// Fetch services cards
export const fetchServiceCards = async () => {
  const response = await axios.get(`${API_URL}/node/service_card`);
  return response.data;
};
