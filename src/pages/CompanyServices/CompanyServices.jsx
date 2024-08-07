import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Axios } from "../../api/axios";
import "./CompanyServices.css";
import ServiceCard from "../../components/CompanyServices/ServiceCard/ServiceCard";
import { useInView } from "react-intersection-observer";
import SEO from "../../components/SharedComponents/SEO/SEO";
import { metaSEO } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
const CompanyServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const getCompanyServicesData = async () => {
    setIsLoading(true);
    try {
      const res = await Axios.get("rest/service_list_web/");
      setServices(res.data.services);
      setIsLoading(false);
    } catch (error) {
      // navigate('/error-page')
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
      <SEO
        title={"Spark | Company services"}
        description={metaSEO.services.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "company services",
          "software services",
          "engineered services",
        ]}
      />
      <div
        ref={ref}
        className={`${inView ? "fade-in-bottom" : ""} main-container`}
      >
        <Container>
          <div className="company-services-grid">
          <div className="center-loading">
            {isLoading && <Loading color={'#2fb0cd'}/>}
          </div>
            {services &&
              services.map((e) => (
                <ServiceCard key={e.pk} info={e} isLoading={isLoading} />
              ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CompanyServices;
