// eslint-disable-next-line react/prop-types
function PlanetItem({ title, content, image, size }) {
  return (
    <div>
      <img src={image} alt="planet" />
      <h3>{title}</h3>
      <h5>{content}</h5>
      <p>{size}</p>
    </div>
  );
}

export default PlanetItem;
