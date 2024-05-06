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
const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsVisible(true);
  //   window.addEventListener("load", () => {
  //     setIsVisible(true);
  //   });
  // }, []);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const description =
    "As a UX designer, I specialize in crafting seamless user experiences that align with your brand and resonate with your audience. My services encompass comprehensive user research, wireframing, prototyping, and interface design. I focus on understanding user behaviors, pain points, and preferences to create intuitive and engaging digital products. Whether it's improving existing interfaces or creating new ones from scratch, I ensure designs that are user-centric, visually appealing, and optimized for usability across devices and platforms.";

  return (
    <section id="about_us">
      <SEO
        title={"Spark | About Us"}
        description={description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software develpoment",
          "software engineer",
          "student services",
        ]}
      />
      <div className="About">
        <div
          ref={ref}
          className={`${inView ? "fade-in-bottom" : ""} about-left`}
        >
          <h3>Description</h3>
          <p>
            As a UX designer, I specialize in crafting seamless user experiences
            that align with your brand and resonate with your audience. My
            services encompass comprehensive user research, wireframing,
            prototyping, and interface design. I focus on understanding user
            behaviors, pain points, and preferences to create intuitive and
            engaging digital products. Whether it's improving existing
            interfaces or creating new ones from scratch, I ensure designs that
            are user-centric, visually appealing, and optimized for usability
            across devices and platforms.
          </p>
        </div>
        <div className="about-right">
          <div ref={ref} className={`${inView ? "fade-in-bottom" : ""}`}>
            {isLoading && <Loading color="#2fb0cd" />}
            <img
              src={about}
              alt=""
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
                <a>
                  <GrFacebookOption size={56} />
                </a>
              </div>
              <div className="icon-about">
                <a>
                  <PiInstagramLogoFill size={46} />
                </a>
              </div>
              <div className="icon-about">
                <a>
                  <RiWhatsappFill size={46} />
                </a>
              </div>
              <div className="icon-about">
                <a>
                  <TiSocialLinkedin size={56} />
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
