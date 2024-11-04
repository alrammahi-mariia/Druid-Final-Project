import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CardComponent = ({ title, text }) => (
  <Card className="h-100">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <LinkContainer to={`/services/`} style={{ cursor: "pointer" }}>
        <Button variant="danger">Learn more</Button>
      </LinkContainer>
    </Card.Body>
  </Card>
);

export default CardComponent;
