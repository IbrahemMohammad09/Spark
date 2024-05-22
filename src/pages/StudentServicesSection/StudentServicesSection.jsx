import "./StudentServicesSection.css";
import { Container } from "react-bootstrap";
import InfoStudentServiceCard from "../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard";
import { Axios } from "../../api/axios";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SEO from "../../components/SharedComponents/SEO/SEO";
import img from "../../images/StudentServices/b.jpg"
const StudentServicesSection = () => {
  // const [services, setServices] = useState([]);

  // const getStudentSectionsServicesData = async () => {
  //   try {
  //     const res = await Axios.get("rest/sections_list_web/");
  //     setServices(res.data.sections);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  const services =[
    {
      pk:1,
      section_name:"IT",
      section_image_web: img ,
    },
    {
      pk:1,
      section_name:"IT",
      section_image_web: img ,
    },
    {
      pk:1,
      section_name:"IT",
      section_image_web: img ,
    }
  ]
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  // useEffect(() => {
  //   getStudentSectionsServicesData();
  // }, []);

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
          services.map((e, i) => <InfoStudentServiceCard key={i} info={e} />)}
      </Container>
    </section>
  );
};

export default StudentServicesSection;
