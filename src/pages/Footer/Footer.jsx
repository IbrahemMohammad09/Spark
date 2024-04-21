import "./Footer.css";
import logo from "../../images/logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoInstagram } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="containerFooter">
        <div className="logoFooter">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p className="spark-footer">SPARK</p>
        </div>
        <div className="gridLinks">
          <div className="links">
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="links">
            <p>Our Services</p>
            <p>Our Team</p>
          </div>
          <div className="links">
            <p>Our Projects</p>
            <p>Our App</p>
          </div>
        </div>
      </div>
      <div className="socialFooter">
        <p>Copyright ® 2024 Company All rights Recerved</p>
        <div className="icons">
          <div className="icon">
            <GrFacebookOption />
          </div>
          <div className="icon">
            <BiLogoInstagram />
          </div>
          <div className="icon">
            <MdWhatsapp />
          </div>
          <div className="icon">
            <TiSocialLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
