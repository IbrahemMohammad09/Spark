import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Axios } from "../../api/axios";
import "./CompanyServices.css";
import ServiceCard from "../../components/CompanyServices/ServiceCard/ServiceCard";
import TabTitle from "../../utils/TabTitle";
import { useInView } from "react-intersection-observer";
// import BrushImage from "../../components/SharedComponents/BrushImage/BrushImage";
const CompanyServices = () => {
  TabTitle("Spark | Company services");
  const [services, setServices] = useState([]);

  const getCompanyServicesData = async () => {
    try {
      const res = await Axios.get("rest/service_web/");
      setServices(res.data.services);
      console.log(res.data.services);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanyServicesData();
  }, []);
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  // Log values to console whenever inView or entry changes
  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);
  return (
    <section id="services" className="company-services position-relative">
      <div
        ref={ref}
        className={`${inView ? "fade-in-bottom" : ""} main-container`}
      >
        <Container>
          <div className="company-services-grid">
            {services &&
              services.map((e) => <ServiceCard key={e.id} info={e} />)}
          </div>
        </Container>
      </div>
      {/* <BrushImage key={3} type={"r"} postion={"brush4"} />
            <BrushImage key={4} type={"l"} postion={"brush5"} /> */}
    </section>
  );
};

export default CompanyServices;
