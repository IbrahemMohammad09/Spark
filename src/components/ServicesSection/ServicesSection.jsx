import "./ServicesSection.css";
import OurServices from './OurServices/OurServices'
import OurTopServices from './OurTopServices/OurTopServices'
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import TabTitle from "../../utils/TabTitle";



const ServicesSection = () => {
  
  TabTitle ('Spark | Services')


  return (
    <section id="services">

      <Container  className="services-section">
        <OurServices/>
        <OurTopServices/>
      </Container>
    </section>

  );
};

export default ServicesSection;
