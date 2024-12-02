import { Card } from "react-bootstrap";

const CardComponent = ({ title, text }) => {
  return (
    <Card style={{ border: "none" }}>
      <Card.Body className="d-flex flex-column">
        {/* Card Title */}
        <Card.Title
          className="mb-4"
          style={{ fontSize: "28px", fontWeight: "300" }}
        >
          {title}
        </Card.Title>

        {/* Card Text (description) */}
        <Card.Text className="flex-grow-1" style={{ fontSize: "20px" }}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
