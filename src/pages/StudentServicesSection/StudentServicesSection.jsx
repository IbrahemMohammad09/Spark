import "./StudentServicesSection.css";
import { Container } from "react-bootstrap";
import InfoStudentServiceCard from "../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard";
import { Axios } from "../../api/axios";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SEO from "../../components/SharedComponents/SEO/SEO";
import img from "../../images/StudentServices/b.jpg";
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

  // const services =[
  //   {
  //     pk:1,
  //     section_name:"IT",
  //     section_image_web: img ,
  //   },
  //   {
  //     pk:1,
  //     section_name:"IT",
  //     section_image_web: img ,
  //   },
  //   {
  //     pk:1,
  //     section_name:"IT",
  //     section_image_web: img ,
  //   }
  // ]
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
          "software develpoment",
          "software engineer",
          "student services",
        ]}
      />
      <Container
        ref={ref}
        className={`${
          inView ? "fade-in-bottom" : ""
        } student-section-services-grid`}
      >
        {services &&
          services.map((e, i) => (
            <InfoStudentServiceCard key={i} info={e} isLoading={isLoading} />
          ))}
      </Container>
    </section>
  );
};

export default StudentServicesSection;
