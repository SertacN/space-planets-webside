import { Data } from "../data/Data";
import PlanetItem from "./PlanetItem";
import "../styles/planets.css";

function Planets() {
  return (
    <div className="mainPlanet">
      <div className="planetContainer">
        {Data.map((item, i) => {
          return (
            <PlanetItem
              key={i}
              title={item.title}
              content={item.content}
              image={item.image}
              size={item.size}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Planets;
