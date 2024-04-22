import "./AboutUs.css";
import about from "../../images/AboutUsImags/About.png";
import web from "../../images/AboutUsImags/iconWeb.svg";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
const AboutUs = () => {
  return (
    <div className="About">
      <div className="about-left">
        <h3>Description</h3>
        <p>
          As a UX designer, I specialize in crafting seamless user experiences
          that align with your brand and resonate with your audience. My
          services encompass comprehensive user research, wireframing,
          prototyping, and interface design. I focus on understanding user
          behaviors, pain points, and preferences to create intuitive and
          engaging digital products. Whether it's improving existing interfaces
          or creating new ones from scratch, I ensure designs that are
          user-centric, visually appealing, and optimized for usability across
          devices and platforms.
        </p>
      </div>
      <div className="about-right">
        <div>
          <img src={about} alt="" className="about-image" />
        </div>
        <div className="about-contact">
          <h3>SPARK</h3>
          <div className="about-web">
            <p>Engineering Company</p>
            <div className="web-image">
              <img src={web} alt="web" />
            </div>
          </div>
          <hr />
          <div className="about-icons">
            <div className="icon-about">
              <GrFacebookOption size={56} />
            </div>
            <div className="icon-about">
              <PiInstagramLogoFill size={46} />
            </div>
            <div className="icon-about">
              <RiWhatsappFill size={46} />
            </div>
            <div className="icon-about">
              <TiSocialLinkedin size={56} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
