// import React, { useEffect, useState } from "react";
// import { fetchImages } from "../services/api";

// const Services = () => {
//   const [loading, setLoading] = useState(true);
//   const [imageData, setImageData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadImages = async () => {
//       try {
//         const data = await fetchImages();

//         console.log("Fetched data:", data); // Log the data
//         if (data && data.included) {
//           console.log("Image URL array:", data.included); // Confirm 'included' object exists
//           setImageData(data.included);
//         } else {
//           console.warn("No 'included' field in response data");
//           setImageData([]); // Set empty array if no data to prevent errors
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching image:", error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     loadImages();
//   }, []); // Empty dependency array to run only once on mount

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading content: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Services</h1>
//       <div>
//         {imageData.map((item, index) => {
//           return (
//             <div key={index}>
//               {/* Add localhost prefix to access image full url */}
//               <img src={`https://localhost:62786${item.attributes.uri.url}`} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Services;
