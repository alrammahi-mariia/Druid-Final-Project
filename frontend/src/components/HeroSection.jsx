import "../style/HeroSection.css";

const HeroSection = ({ title, description, bgColor = "white" }) => {
  const getBgClass = () => {
    switch (bgColor) {
      case "white":
        return "bg-white";
      case "dark":
        return "bg-dark";
      case "light":
        return "bg-light";
      default:
        return "bg-white";
    }
  };

  return (
    <section className={`hero-section ${getBgClass()}`}>
      <div className="container">
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </div>
    </section>
  );
};

export default HeroSection;
