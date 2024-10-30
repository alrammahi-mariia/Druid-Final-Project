const ServiceCard = ({ title, subtitle, image, link, text }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{subtitle}</p>
    <div
      className="lead text-center"
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
    {image && <img src={image} alt={title} />}
    <a href={link}>Learn More</a>
  </div>
);

export default ServiceCard;
