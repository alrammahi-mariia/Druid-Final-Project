// import React, { useEffect, useState } from "react";
// import { fetchContent } from "../services/api";
// import { Card, Row, Col, Container } from "react-bootstrap";

// const Home = () => {
//   const [content, setContent] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchContent() // Fetching content directly from the API
//       .then((data) => {
//         console.log("Fetched data:", data); // Log fetched data
//         setContent(data); // Set the fetched content
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching content:", error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading content: {error.message}</div>;
//   }

//   return (
//     <Container style={{ margin: "0 20px" }}>
//       {" "}
//       {/* Apply left and right margin */}
//       {/* <h1 className="mt-4">Home</h1> */}
//       {content.length > 0 ? (
//         <Row className="mt-4">
//           {content.map((item) => (
//             <div key={item.nid[0].value} className="mb-4">
//               {/* Render body content directly */}
//               {item.body && item.body.length > 0 && (
//                 <div
//                   dangerouslySetInnerHTML={{ __html: item.body[0].value }}
//                   className="mb-3"
//                   style={{
//                     height: "40%",
//                     overflowY: "auto",
//                     fontSize: "50px",
//                     display: "flex",
//                     alignItems: "start",
//                     justifyContent: "center",
//                   }}
//                 />
//               )}

//               {/* Display field_service_images */}
//               {item.field_service_images &&
//                 item.field_service_images.length > 0 &&
//                 item.field_service_images.map((image, index) => (
//                   <Row key={index} className="mb-4" style={{ width: "100%" }}>
//                     {index % 2 === 0 ? (
//                       <>
//                         {/* Even index: Image on left, text on right */}
//                         <Col md={6}>
//                           <Card className="card-custom">
//                             <Card.Img
//                               variant="top"
//                               src={image.url}
//                               alt={image.alt || "Image"}
//                               className="card-img-custom"
//                               style={{
//                                 width: "100%",
//                                 height: "600px",
//                                 objectFit: "cover",
//                               }}
//                             />
//                           </Card>
//                         </Col>
//                         <Col md={6} className="d-flex align-items-center">
//                           <Card className="card-custom">
//                             <Card.Body className="card-body-custom">
//                               <Card.Text className="text-center">
//                                 {image.alt || "Image description"}
//                               </Card.Text>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       </>
//                     ) : (
//                       // Odd index: Image on right, text on left
//                       <>
//                         <Col md={6} className="d-flex align-items-center">
//                           <Card className="card-custom">
//                             <Card.Body className="card-body-custom">
//                               <Card.Text className="text-center">
//                                 {image.alt || "Image description"}
//                               </Card.Text>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                         <Col md={6}>
//                           <Card className="card-custom">
//                             <Card.Img
//                               variant="top"
//                               src={image.url}
//                               alt={image.alt || "Image"}
//                               className="card-img-custom"
//                               style={{
//                                 width: "100%",
//                                 height: "600px",
//                                 objectFit: "cover",
//                               }}
//                             />
//                           </Card>
//                         </Col>
//                       </>
//                     )}
//                   </Row>
//                 ))}
//             </div>
//           ))}
//         </Row>
//       ) : (
//         <div>No content available</div>
//       )}
//     </Container>
//   );
// };

// export default Home;
