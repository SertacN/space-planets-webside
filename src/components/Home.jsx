import "../styles/home.css";
import SpaceBg from "../assets/space-galaxy-background.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mainDiv" style={{ backgroundImage: `url(${SpaceBg})` }}>
      <Link to={"/planets"}>
        <button className="homebtn">Explore Planets</button>
      </Link>
    </div>
  );
}

export default Home;
