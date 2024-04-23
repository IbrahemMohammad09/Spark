import { Container } from 'react-bootstrap';
import Img1 from '../../images/StudentSectionServicesImages/Rectangle 168.png'
import './StudentServicesSection.css'
import InfoStudentServiceCard from '../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard';

const StudentServicesSection = () => {
    const services = [
        {
            title: 'Informatics Engineering',
            url: '#',
            img: Img1
        },
        {
            title: 'Architectural Engineering',
            url: '#',
            img: Img1
        },
        {
            title: 'Civil Engineering',
            url: '#',
            img: Img1
        },
    ];

    return (
        <section className='student-section-services main-container'>
            <Container className='student-section-services-grid'>
                {services.map((e, i) => <InfoStudentServiceCard key={i} info={e}/>)}
            </Container>
        </section>
    )
}

export default StudentServicesSection