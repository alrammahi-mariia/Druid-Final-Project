import axios from "axios";

export const URL = "https://druid-final-project.lndo.site";

// Function to fetch user data
export const fetchUsers = async () => {
  const endpoint = `${URL}/jsonapi/user/user`;

  try {
    console.log("Fetching user data from API:", endpoint);
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error in fetchUsers:", error);
    throw new Error(
      error.response ? error.response.data.message : "Network error"
    );
  }
};

// Function to fetch data based on content type with specific included fields
export const fetchPageData = async (contentType, includedFields) => {
  const fieldsQuery = includedFields
    ? `?include=${includedFields.join(",")}`
    : "";
  const apiUrl = `${URL}/jsonapi/node/${contentType}${fieldsQuery}`;
  console.log("Fetching from URL:", apiUrl);

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
