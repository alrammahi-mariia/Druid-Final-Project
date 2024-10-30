import { Button, Card, Col } from "react-bootstrap";

const ServiceCard = ({ title, text }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <div
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </Card.Text>
      <Button variant="danger">Learn more</Button>
    </Card.Body>
  </Card>
);

export default ServiceCard;
