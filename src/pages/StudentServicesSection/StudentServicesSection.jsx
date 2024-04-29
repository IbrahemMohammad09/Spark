import "./StudentServicesSection.css";
import { Container } from "react-bootstrap";
import InfoStudentServiceCard from "../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard";
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import TabTitle from "../../utils/TabTitle";
const StudentServicesSection = () => {
  TabTitle("Spark | Student section");

  const [services, setServices] = useState([]);

  const getStudentSectionsServicesData = async () => {
    try {
      const res = await Axios.get("rest/section_list/");
      setServices(res.data.sections);
      console.log(res.data.sections);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentSectionsServicesData();
  }, []);
  return (
    <section id="services" className="student-section-services main-container">
      <Container className="student-section-services-grid">
        {services &&
          services.map((e, i) => (
            <InfoStudentServiceCard
              key={i}
              info={e}
            />
          ))}
      </Container>
    </section>
  );
};


export default StudentServicesSection;
