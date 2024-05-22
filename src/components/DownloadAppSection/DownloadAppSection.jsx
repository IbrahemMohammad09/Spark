import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import GirlWithMobile from "../../images/DownloadAppSection/girl-with-mobile.webp";
import DownloadIcon from "../../images/DownloadAppSection/download.webp";
import { RiGooglePlayFill } from "react-icons/ri";
import Mobiles from "../../images/DownloadAppSection/mobiles.svg";
import "./download-app-section.css";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import SEO from "../SharedComponents/SEO/SEO";
import generateAlt from "../../utils/GenerateImageAlt";
import { metaSEO } from "../../utils/constants";

const DownloadAppSection = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });
  const [isLoading, setIsLoading] = useState(true);
  // Log values to console whenever inView or entry changes
  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);

  return (
    <section id="our_app" className="download-sec">
      <SEO title={'Spark | Our App'} description={metaSEO.downloadApp.description} name={'Spark'} type={'website'} keywords={["software application", "google app", "android app"]} />
      <Container>
        <div ref={ref} className={`${inView ? "fade-in-bottom" : ""}`}>
          <Row className="gap-y-4 justify-content-center align-items-center">
            <Col xs={6} md={3} className="d-flex p-0">
              {isLoading && <Loading color="white" />}
              <img
                className="girl-with-mobile"
                src={GirlWithMobile}
                alt={generateAlt(GirlWithMobile)}
                style={{ display: isLoading ? "none" : "block" }}
                onLoad={() => setIsLoading(false)}
              />
            </Col>
            <Col xs={5} md={6} className="p-0">
              <h1 className="d-flex align-items-center gap-1 text-white">
                <img className="download-icon" src={DownloadIcon} alt={generateAlt(DownloadIcon)} />
                Download Our App
              </h1>
              <p className="text-white">
                {/* Download the application to benefit from our comprehensive and
                diverse services */}
                {metaSEO.downloadApp.description}
              </p>
              {/* Google Play Link */}
              <Link
                to={{
                  pathname: "",
                }}
                target="_blank"
                className="download-btn d-none d-md-flex"
              >
                <RiGooglePlayFill size={30} />
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
                <RiGooglePlayFill size={30} />
                google play
              </Link>
            </Col>
            <Col
              xs={5}
              md={3}
              className="d-flex justify-content-center align-items-center"
            >
              {isLoading && <Loading color="white" />}
              <img
                className="mobiles"
                src={Mobiles}
                alt={generateAlt(Mobiles)}
                style={{ display: isLoading ? "none" : "block" }}
                onLoad={() => setIsLoading(false)}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
