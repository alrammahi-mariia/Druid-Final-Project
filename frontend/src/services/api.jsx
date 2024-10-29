import axios from "axios";

const API_URL = "http://druid-final-project.lndo.site/home";

export const fetchContent = async () => {
  const response = await axios.get(API_URL);
  return response.data; // This should return the full data array
};
