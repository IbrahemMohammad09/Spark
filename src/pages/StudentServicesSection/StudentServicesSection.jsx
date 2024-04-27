<<<<<<< HEAD
import { Container } from "react-bootstrap";
import Img1 from "../../images/StudentSectionServicesImages/Rectangle 168.png";

import "./StudentServicesSection.css";
import InfoStudentServiceCard from "../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard";

const StudentServicesSection = () => {
  const services = [
    {
      title: "Informatics Engineering",
      url: "#",
      img: Img1,
    },
    {
      title: "Architectural Engineering",
      url: "#",
      img: Img1,
    },
    {
      title: "Civil Engineering",
      url: "#",
      img: Img1,
    },
  ];

  return (
    <section className="student-section-services main-container">
      <Container className="student-section-services-grid">
        {services.map((e, i) => (
          <InfoStudentServiceCard key={i} info={e} />
        ))}
      </Container>
    </section>
  );
};
=======
import './StudentServicesSection.css'
import { Container } from 'react-bootstrap';
import InfoStudentServiceCard from '../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard';
import { Axios } from '../../api/axios';
import { useEffect, useState } from 'react';
import TabTitle from '../../utils/TabTitle';

const StudentServicesSection = () => {

    TabTitle('Spark | Student section');

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
    }, [])

    return (
        <section className='student-section-services main-container'>
            <Container className='student-section-services-grid'>
                {services && services.map((e, i) => <InfoStudentServiceCard key={i} info={e} resturl={"/student-section-detail"}/>)}

            </Container>
        </section>
    )
}
>>>>>>> e48f75f6beeb2ee54a6d6a5dc13ed703d76aa371

export default StudentServicesSection;
