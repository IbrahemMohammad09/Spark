import { Col, Container, Row } from "react-bootstrap";

import WorldMap from "../../images/ContactUSSection/Huge Global.svg";
import "./contact-us.css";


const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us py-6">

      <Container>
        <Row className="justify-content-center">
          <Col className="d-flex align-items-center" xs={10} lg={3}>
            <h1>Contact Us</h1>
          </Col>
          <Col xs={10} lg={9}>
            <img className="world-map" src={WorldMap} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
