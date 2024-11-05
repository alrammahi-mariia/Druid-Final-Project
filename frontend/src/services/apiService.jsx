import axios from "axios";

export const URL = "https://druid-final-project.lndo.site/";

// Function to fetch data based on content type with specific included fields
export const fetchPageData = async (contentType, includedFields) => {
  // Construct the URL dynamically based on contentType and includedFields
  const fieldsQuery = includedFields
    ? `?include=${includedFields.join(",")}`
    : "";
  const apiUrl = `${URL}/jsonapi/node/${contentType}${fieldsQuery}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error in fetchPageData:", error);

    throw new Error(
      error.response ? error.response.data.message : "Network error"
    );
  }
};
