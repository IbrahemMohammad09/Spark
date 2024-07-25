import "./Footer.css";
import logo from "../../images/log.webp";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoInstagram } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import generateAlt from "../../utils/GenerateImageAlt";
export const Footer = () => {
  const [hideFooter, setHideFooter] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setHideFooter(
        pathname.includes("/error-page") ||
        pathname.includes("/coming") ||
        pathname.includes("/student-project-request/") ||
        pathname.includes("/student-course-request/") ||
        pathname.includes("/company-request") ||
        pathname.includes("/view-project")
    );
  }, [pathname]);

  return (
    <section className={`${hideFooter ? "d-none": ""}`}>
      <div className="Footer position-relative z-1">
        <div className="containerFooter">
          <Link to={'/'} className="logoFooter" onClick={() => window.scrollTo(0,0)}>
            <div>
              <img src={logo} alt={generateAlt(logo)} />
            </div>
            <p className="spark-footer">SPARK</p>
          </Link>
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
              <Link className="theLink" to="/our-projects">
                Our Projects
              </Link>
              <Link className="theLink" to="/our_app">
                Our App
              </Link>
            </div>
          </div>
        </div>
        <div className="socialFooter">
          <p>Copyright ® 2024 Company All rights reserved</p>
          <div className="icons">
            <div className="icon face">
              <a href="https://www.facebook.com/profile.php?id=61553751250143&mibextid=ZbWKwL">
                <GrFacebookOption />
              </a>
            </div>
            <div className="icon insta">
              <a href="https://www.instagram.com/spark.eng.company?igsh=NGJucWhrMHA4MDI3">
                <BiLogoInstagram />
              </a>
            </div>
            <div className="icon whats">
              <a href="https://wa.me/+963962272881">
                <MdWhatsapp />
              </a>
            </div>
            <div className="icon linked">
              <a href="https://www.linkedin.com/company/spark-engineering-company/">
                <TiSocialLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
