import "./Footer.css";
import logo from "../../images/logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoInstagram } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <section>
      <div className="Footer position-relative z-1">
        <div className="containerFooter">
          <div className="logoFooter">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className="spark-footer">SPARK</p>
          </div>
          <div className="gridLinks">
            <div className="links">
              <Link className="theLink" to="/about_us">
                About Us
              </Link>
              <Link className="theLink" to="/contact_us">
                Contact Us
              </Link>
            </div>
            <div className="links">
              <Link className="theLink" to="/services">
                Our Services
              </Link>
              <Link className="theLink" to="/our_team">
                Our Team
              </Link>
            </div>
            <div className="links">
              <Link className="theLink" to="/our_projects">
                Our Projects
              </Link>
              <Link className="theLink" to="/our_app">
                Our App
              </Link>
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
    </section>
  );
};
