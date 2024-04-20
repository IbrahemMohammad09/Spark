import "./ServicesSection.css";
import OurServices from './OurServices/OurServices'
import OurTopServices from './OurTopServices/OurTopServices'
import { Container } from "react-bootstrap";

const ServicesSection = () => {
  return (
    <Container className="services-section">
      <OurServices/>
      <OurTopServices/>
    </Container>

  );
};

export default ServicesSection;
