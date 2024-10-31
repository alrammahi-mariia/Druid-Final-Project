import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ServiceCard = ({ service }) => (
  <Card className="h-100">
    <Card.Body>
      <Card.Title>{service.attributes.field_card_title}</Card.Title>
      <Card.Text>
        <div
          dangerouslySetInnerHTML={{
            __html: service.attributes.body.value,
          }}
        />
      </Card.Text>
      <LinkContainer
        to={`/services/${service.id}`}
        state={{ service: service }}
        style={{ cursor: "pointer" }}
      >
        <Button variant="danger">Learn more</Button>
      </LinkContainer>
    </Card.Body>
  </Card>
);

export default ServiceCard;
