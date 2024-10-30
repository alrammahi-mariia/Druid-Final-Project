import { Button, Card } from "react-bootstrap";

const ServiceCard = ({ title, text }) => (
  <Card className="h-100">
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
