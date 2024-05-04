import "./Footer.css";
import logo from "../../images/log.png";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoInstagram } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const Footer = () => {
  const [hideFooter, setHideFooter] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setHideFooter(pathname.includes("/error-page") 
    || pathname.includes("/student-project-request/") 
    || pathname.includes("/company-request")
    || pathname.includes("/view-project")
    );
    // const isRequestPage = pathname.match(/^\/company-request\/\d+$/);
    
    // setHideFooter(!!isRequestPage);
  }, [pathname]);

  return (
    <section className={`${hideFooter && 'd-none'}`}>
      <div className="Footer position-relative z-1">
        <div className="containerFooter">
          <div className="logoFooter">
            <div>
              <img src={logo} alt="spark logo" />
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
            <div className="icon face">
              <GrFacebookOption />
            </div>
            <div className="icon insta">
              <BiLogoInstagram />
            </div>
            <div className="icon whats">
              <MdWhatsapp />
            </div>
            <div className="icon linked">
              <TiSocialLinkedin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
