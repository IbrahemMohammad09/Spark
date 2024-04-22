import "./ServicesSection.css";
import OurServices from './OurServices/OurServices'
import OurTopServices from './OurTopServices/OurTopServices'
import { Container } from "react-bootstrap";
import NavigationBar from "../../pages/NavigationBar/NavigationBar";


const ServicesSection = () => {
  return (
    <section id="services">
      <NavigationBar sectionName='services'/>
      <Container  className="services-section">
        <OurServices/>
        <OurTopServices/>
      </Container>
    </section>

  );
};

export default ServicesSection;
