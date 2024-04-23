import { Container } from 'react-bootstrap';

import './StudentServicesSection.css'
import InfoStudentServiceCard from '../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard';
import { Axios } from '../../api/axios';
import { useEffect, useState } from 'react';

const StudentServicesSection = () => {
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
                {services && services.map((e, i) => <InfoStudentServiceCard key={i} info={e}/>)}
            </Container>
        </section>
    )
}

export default StudentServicesSection