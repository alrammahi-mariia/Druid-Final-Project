import axios from "axios";

export const API_URL = "http://druid-final-project.lndo.site/home";

export const fetchContent = async () => {
  const response = await axios.get(API_URL);
  return response.data; // This should return the full data array
};

export const fetchImages = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/jsonapi/media/image?include=field_media_img&fields[file--file]=uri,url`
    );

    console.log("Fetched data:", response.data); // Log the fetched data
    console.log("Included object:", response.data.included); // Log the included object containing image URLs

    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};
