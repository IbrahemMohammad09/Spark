import "./AboutUs.css";
import { useState, useEffect } from "react";
import about from "../../images/AboutUsImags/About.png";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { Loading } from "../../components/Loading/Loading";
import SEO from "../../components/SharedComponents/SEO/SEO";
import { useInView } from "react-intersection-observer";
import generateAlt from "../../utils/GenerateImageAlt";
import { metaSEO } from "../../utils/constants";
const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about_us">
      <SEO
        title={"Spark | About Us"}
        description={metaSEO.about.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "spark company for engineering and software services",
          "spark company for web services",
          "spark company for marketing services",
        ]}
      />
      <div className="About">
        <div
          ref={ref}
          className={`${inView ? "fade-in-bottom" : ""} about-left`}
        >
          <h3>About us</h3>
          <p>
            {metaSEO.about.description}
          </p>
        </div>
        <div className="about-right">
          <div ref={ref} className={`${inView ? "fade-in-bottom" : ""}`}>
            {isLoading && <Loading color="#2fb0cd" />}
            <img
              src={about}
              alt={generateAlt(about)}
              className="about-image"
              style={{ display: isLoading ? "none" : "block" }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="about-contact">
            <h3>SPARK</h3>
            <div className="about-web">
              <p>Engineering Company</p>
            </div>
            <hr />
            <div className="about-icons">
              <div className="icon-about">
                <a href="https://www.facebook.com/profile.php?id=61553751250143&mibextid=ZbWKwL">
                  <GrFacebookOption />
                </a>
              </div>
              <div className="icon-about">
                <a href="https://www.instagram.com/spark.eng.company?igsh=NGJucWhrMHA4MDI3">
                  <PiInstagramLogoFill />
                </a>
              </div>
              <div className="icon-about">
                <a href="https://wa.me/+963962272881">
                  <RiWhatsappFill />
                </a>
              </div>
              <div className="icon-about">
                <a href="https://www.linkedin.com/company/spark-engineering-company/">
                  <TiSocialLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
