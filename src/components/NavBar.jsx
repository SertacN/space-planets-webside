import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="mainContainer">
      <div className="navContainer">
        <img className="navImg" src="" alt="logo" />
        <div className="navLink">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/planets"}>Planets</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
