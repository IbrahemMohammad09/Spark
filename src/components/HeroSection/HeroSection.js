import { Container, Row, Col } from "react-bootstrap";
import "./HeroSection.css";
import hero from "../../images/HeroSectionImags/hero.svg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const HeroSection = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the item is visible
  });

  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);
  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row ref={ref} className={`${inView ? "fade-in-bottom" : ""}`}>
          <Col md="6">
            <div className="hero-text">
              <h1 className="hero-h1">Biuld Your Dreams</h1>
              <p className="hero-p">With us dreams will turn into reality</p>
            </div>
          </Col>
          <Col md="6" className="div-img">
            <img className="hero-img" src={hero} alt="hero img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
