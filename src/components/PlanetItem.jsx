import "../styles/planets.css";

// eslint-disable-next-line react/prop-types
function PlanetItem({ title, content, image, size }) {
  return (
    <div className="planetItem">
      <img src={image} alt="planet" />
      <h3>{title}</h3>
      <h5>{content}</h5>
      <i>
        {" "}
        <p>Size: {size}</p>
      </i>
    </div>
  );
}

export default PlanetItem;
