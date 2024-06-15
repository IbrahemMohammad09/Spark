import "./StudentServicesSection.css";
import { Container } from "react-bootstrap";
import InfoStudentServiceCard from "../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard";
import { Axios } from "../../api/axios";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SEO from "../../components/SharedComponents/SEO/SEO";
import img from "../../images/StudentServices/b.jpg";
import { Loading } from "../../components/Loading/Loading";
const StudentServicesSection = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const getStudentSectionsServicesData = async () => {
    setIsLoading(true);
    try {
      const res = await Axios.get("rest/sections_list_web/");
      setIsLoading(false);
      setServices(res.data.sections);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getStudentSectionsServicesData();
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="student-section-services main-container">
      <SEO
        title={"Spark | Student section"}
        description={""}
        name={"Spark"}
        type={"website"}
        keywords={[
          "Branding services",
          "Mobile apps services",
          "Desktop apps services",
        ]}
      />
      <div className="center-loading">
          {isLoading && <Loading color={'#2fb0cd'}/>}
      </div>
      <Container
        ref={ref}
        className={`${
          inView ? "fade-in-bottom" : ""
        } student-section-services-grid`}
      >
        {services && !isLoading &&
          services.map((e, i) => (
            <InfoStudentServiceCard key={i} info={e} isLoading={isLoading} />
          ))}
      </Container>
    </section>
  );
};

export default StudentServicesSection;
