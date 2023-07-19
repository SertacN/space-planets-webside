import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="social">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        tempora?
      </p>
    </div>
  );
}

export default Footer;
