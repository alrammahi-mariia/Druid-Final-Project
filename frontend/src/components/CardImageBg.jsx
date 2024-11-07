import { Card, Image } from "react-bootstrap";
import { URL } from "../services/apiService";

const CardImageBg = ({ title, text, imageUrl }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        {imageUrl && (
          <Image
            src={`${URL}${imageUrl}`}
            alt={title}
            style={{ width: "500px" }}
          />
        )}
        <Card.Title className="mt-3">{title}</Card.Title>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Card.Body>
    </Card>
  );
};

export default CardImageBg;
