import React, { useLayoutEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import OurServices from "./OurServices/OurServices";
import OurTopServices from "./OurTopServices/OurTopServices";
import TabTitle from "../../utils/TabTitle";
const ServicesSection = () => {
  // Set tab title

  useLayoutEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <section id="services" className="services">
      <SEO title={'Spark | Services'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
      <Container className="services-section">
        <OurServices />
        <OurTopServices />
      </Container>
    </section>
  );
};

export default ServicesSection;
