import axios from "axios";

const API_URL = "https://localhost:62786/jsonapi";

export const fetchContent = async (contentType) => {
  const response = await axios.get(`${API_URL}/${contentType}`);
  return response.data;
};
