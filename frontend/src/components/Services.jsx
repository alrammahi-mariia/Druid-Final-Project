import React, { useEffect, useState } from "react";
import { fetchContent } from "../services/api";

const Services = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent(
      "node/services?include=field_image_file&fields[file--file]=uri,url"
    )
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        console.log("Image url:", data.included[0].attributes.uri.url); // Log the fetched data
        setContent(data.data[0]); // Access the first item in the data array
        setImageUrl(data.included[0].attributes.uri.url); // Access the image url and set it to imageUrl state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image:", error); // Log any errors
        setError(error);
        setLoading(false);
      });

    //   fetch("https://localhost:62786/jsonapi/images-api")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Fetched data:", data); // Log the fetched data
    //       setContent(data); // Access the first item in the data array
    //       setLoading(false);
    //     })
    //     .catch((imgError) => console.error("Error fetching image:", imgError));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }

  return (
    <div>
      <h1>Services</h1>
      {/* {content && content.length > 0 ? ( */}
      <div>
        <img src={`https://localhost:62786/${imageUrl}`} />
        {/* {content.map((item, index) => {
            return (
              <div key={index}>
                {imageUrl ? (
                  <img src={imageUrl} />
                ) : (
                  <div>No image available</div>
                )}
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default Services;
