import React, { useEffect, useState } from "react";
import { fetchContent } from "../services/api";

const Services = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent(
      "media/image?include=field_media_image&fields[file--file]=uri,url" //include a uuid in the request to get specific image
    )
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        console.log("Image url:", data.included); // Log the fetched data
        setContent(data.data[0]); // Access the first item in the data array
        setImageData(data.included); // Access the image url array and set it to imageData state in an array
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

  console.log("image data", imageData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }

  return (
    <div>
      <h1>Services</h1>
      {/* // <img src={`https://localhost:62786/${imageUrl}`} /> */}
      <div>
        {imageData.map((item, index) => {
          return (
            <div key={index}>
              <img src={`https://localhost:62786${item.attributes.uri.url}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
