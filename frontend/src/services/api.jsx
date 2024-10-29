import axios from "axios";

const API_URL = "https://localhost:62786/jsonapi";

export const fetchContent = async (contentType) => {
  const response = await axios.get(`${API_URL}/${contentType}`);
  return response.data;
};

export const fetchImages = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/media/image?include=field_media_image&fields[file--file]=uri,url`
    );

    console.log("Fetched data:", response.data); // Log the fetched data
    console.log("Included object:", response.data.included); // Log the included object containing image URLs

    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};
