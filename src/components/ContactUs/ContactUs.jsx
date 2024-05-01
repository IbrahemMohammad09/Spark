import { Col, Container, Row } from "react-bootstrap";
import WorldMap from "../../images/ContactUSSection/Huge Global.svg";
import "./contact-us.css";
import { useInView } from "react-intersection-observer";
import { RiMailLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import SEO from "../SharedComponents/SEO/SEO";

const ContactUs = () => {
  const companyEmail = "Spark.contact.it@gmail.com";

  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  return (
    <section id="contact_us" className="contact-us py-6">
      <SEO title={'Spark | Contact us'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
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
                <a href={`mailto:${companyEmail}`}>
                  <RiMailLine size={30} />
                </a>
                <a href="https://wa.me/+963962272881">
                  <RiWhatsappLine size={30} />
                </a>
              </div>
            </Col>
            <Col xs={10} lg={9}>
              <img className="world-map" src={WorldMap} alt="world-map" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default ContactUs;
