const ServiceCard = ({ title, subtitle, image, link }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{subtitle}</p>
    {image && <img src={image} alt={title} />}
    <a href={link}>Learn More</a>
  </div>
);

export default ServiceCard;
