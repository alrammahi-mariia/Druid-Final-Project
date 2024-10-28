import React, { useEffect, useState } from "react";
import { fetchContent } from "../services/api";

const Services = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetchContent("/images-api")
    //   .then((data) => {
    //     console.log("Fetched data:", data); // Log the fetched data
    //     setContent(data[0]); // Access the first item in the data array
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching image:", error); // Log any errors
    //     setError(error);
    //     setLoading(false);
    //   });
    fetch("https://localhost:62786/jsonapi/images-api/?includes=name")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setContent(data); // Access the first item in the data array
        setLoading(false);
      })
      .catch((imgError) => console.error("Error fetching image:", imgError));
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
      {content && content.length > 0 ? (
        <div>
          {content.map((item, index) => {
            const imageUrl = item.field_media_image[0].url;
            return (
              <div key={index}>
                {imageUrl ? (
                  <img src={imageUrl} />
                ) : (
                  <div>No image available</div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div>No content available</div>
      )}
    </div>
  );
};

export default Services;
