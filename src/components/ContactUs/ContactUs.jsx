import { Col, Container, Row } from "react-bootstrap";
import WorldMap from "../../images/ContactUSSection/Huge Global.svg";
import "./contact-us.css";
import { useInView } from "react-intersection-observer";
import { RiMailLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import SEO from "../SharedComponents/SEO/SEO";
import mailIcon from "../../images/ContactUSSection/mail.jpg"
import callIcon from "../../images/ContactUSSection/call.jpg"

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
              <div className="contact-container">
                <h1 className="contact-h1">Contact Us</h1>
                <div className="d-flex align-items-start gap-1 justify-content-start contact-box">
                  <a href={`mailto:${companyEmail}`}>
                    {/* <RiMailLine size={30} /> */}
                    <div className="contact">
                      <img src={mailIcon} className="contact-icon" />
                      <p className="contact-do">Mail Us</p>
                      <p className="contact-where">Spark.contact.it@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/+963962272881">
                    {/* <RiWhatsappLine size={30} /> */}
                    <div className="contact">
                      <img src={callIcon} className="contact-icon" />
                      <p className="contact-do">Call Us</p>
                      <p className="contact-where">+963 962 272 881</p>
                    </div>
                  </a>
                </div>
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
