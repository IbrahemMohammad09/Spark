import { Col, Container, Row } from "react-bootstrap";
import WorldMap from "../../images/ContactUSSection/Huge Global.svg";
import "./contact-us.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { RiMailLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";

import TabTitle from "../../utils/TabTitle";




const ContactUs = () => {
  TabTitle ('Spark | Contact us');


  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the item is visible
  });

  // Log values to console whenever inView or entry changes
  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);

  return (
    <section id="contact" className="contact-us py-6">
      <div ref={ref} className={`${inView ? "fade-in-bottom" : ""}`}>
        <Container>
          <Row className="justify-content-center">
            <Col
              className="d-flex justify-content-center flex-column align-items-center"
              xs={10}
              lg={3}
            >
              <h1>Contact Us</h1>
              <div className="d-flex align-items-start gap-1 justify-content-start">
                <a href="mailto:spark.contact.it@gmail.com">
                  <RiMailLine size={30} />
                </a>
                <a href="tel:+963962272881">
                  <RiWhatsappLine size={30} />
                </a>
              </div>
            </Col>
            <Col xs={10} lg={9}>
              <img className="world-map" src={WorldMap} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default ContactUs;
