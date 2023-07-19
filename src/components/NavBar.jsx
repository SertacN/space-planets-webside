import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/Logo.png";

function NavBar() {
  return (
    <div className="mainContainer">
      <div className="navContainer">
        <Link to={"/"}>
          <img className="navImg" src={Logo} alt="logo" />
        </Link>
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
