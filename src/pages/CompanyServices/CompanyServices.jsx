import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Axios } from "../../api/axios";
import "./CompanyServices.css";
import ServiceCard from "../../components/CompanyServices/ServiceCard/ServiceCard";
import { useInView } from "react-intersection-observer";
import SEO from "../../components/SharedComponents/SEO/SEO";

const CompanyServices = () => {
  const [services, setServices] = useState([]);

  const getCompanyServicesData = async () => {
    try {
      const res = await Axios.get("rest/service_list_web/");
      setServices(res.data.services);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getCompanyServicesData();
  }, []);

  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  return (
    <section id="services" className="company-services position-relative">
      <SEO title={'Spark | Company services'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
      <div
        ref={ref}
        className={`${inView ? "fade-in-bottom" : ""} main-container`}
      >
        <Container>
          <div className="company-services-grid">
            {services &&
              services.map((e) => <ServiceCard key={e.pk} info={e} />)}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CompanyServices;
