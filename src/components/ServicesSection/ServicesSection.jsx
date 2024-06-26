import React, { useLayoutEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import OurServices from "./OurServices/OurServices";
import OurTopServices from "./OurTopServices/OurTopServices";
import TabTitle from "../../utils/TabTitle";
import SEO from '../SharedComponents/SEO/SEO'
import { metaSEO } from "../../utils/constants";
const ServicesSection = () => {
  // Set tab title

  useLayoutEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <section id="services" className="services">
      <SEO title={'Spark | Services'} description={metaSEO.services.description} name={'Spark'} type={'website'} keywords={["software services", "engineering services", "student services"]} />
      <Container className="services-section">
        <OurServices />
        <OurTopServices />
      </Container>
    </section>
  );
};

export default ServicesSection;
