import "./ServicesSection.css";
import OurServices from './OurServices/OurServices'
import OurTopServices from './OurTopServices/OurTopServices'
import { Container } from "react-bootstrap";
import SEO from "../SharedComponents/SEO/SEO";

const ServicesSection = () => {
  return (
    <section id="services">
      <SEO title={'Spark | Services'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
      <Container  className="services-section">
        <OurServices/>
        <OurTopServices/>
      </Container>
    </section>

  );
};

export default ServicesSection;
