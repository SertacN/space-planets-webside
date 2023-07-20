import Spaceimg from "../assets/space.jpg";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contactMainDiv">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Spaceimg})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="nameLname">Name - Lastname</label>
          <input type="text" id="nameLname" />
          <label htmlFor="email">E - mail</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" cols="30" rows="10"></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
