import { Col, Container, Row } from "react-bootstrap";
import GirlWithMobile from "../../images/DownloadAppSection/girl-with-mobile.png";
import DownloadIcon from "../../images/DownloadAppSection/download.png";
import GooglePlayIcon from "../../images/DownloadAppSection/google-play.svg";
import Mobiles from "../../images/DownloadAppSection/mobiles.svg";
import "./download-app-section.css";
import { Link } from "react-scroll";
import NavigationBar from "../../pages/NavigationBar/NavigationBar";

const DownloadAppSection = () => {
  return (
    <section className="download-sec">
      <NavigationBar />
      <Container>
        <Row className="gap-y-4 justify-content-center align-items-center">
          <Col xs={6} md={3} className="d-flex p-0">
            <img className="girl-with-mobile" src={GirlWithMobile} alt="" />
          </Col>
          <Col xs={5} md={6} className="p-0">
            <h1 className="d-flex align-items-center gap-1 text-white">
              <img className="download-icon " src={DownloadIcon} alt="" />
              Download Our App
            </h1>
            <p className="text-white">
              Download the application to benefit from our comprehensive and
              diverse services
            </p>
            {/* Google Play Link */}
            <Link
              to={{
                pathname: "",
              }}
              target="_blank"
              className="download-btn d-none d-md-flex"
            >
              <img src={GooglePlayIcon} alt="" />
              google play
            </Link>
          </Col>
          {/* Repeat for media query */}
          <Col xs={5} className="d-flex d-md-none">
            <Link
              to={{
                pathname: "",
              }}
              target="_blank"
              className="download-btn"
            >
              <img src={GooglePlayIcon} alt="" />
              google play
            </Link>
          </Col>
          <Col
            xs={5}
            md={3}
            className="d-flex justify-content-center align-items-center"
          >
            <img className="mobiles" src={Mobiles} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
