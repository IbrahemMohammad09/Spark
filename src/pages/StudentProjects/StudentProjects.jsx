import HeaderSection from '../../components/SharedComponents/HeaderSection/HeaderSection'
import './StudentProjects.css'
import Img1 from '../../images/StudentProjectsImgs/Web Designs-1.png'
import Img2 from '../../images/StudentProjectsImgs/Web Designs.png'
import { Container } from "react-bootstrap"
import StudentProjectCard from '../../components/StudentProjects/StudentProjectCard/StudentProjectCard'
import TabTitle from '../../utils/TabTitle'

const StudentProjects = () => {
    TabTitle('Spark | student projects');

    const projects = [
        {
            title: 'Web Design',
            subtitle: 'Business Landing Page Design',
            discreption: "From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisesses and data-driven decisesses and data-driven decisions.",
            id: 1,
            imgs: [
                Img1,
                Img2,
            ]
        },
        {
            title: 'Web Design',
            subtitle: 'Business Landing Page Design',
            discreption: "From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisesses and data-driven decisesses and data-driven decisions.",
            id: 2,
            imgs: [
                Img1,
                Img2,
            ]
        },
        {
            title: 'Web Design',
            subtitle: 'Business Landing Page Design',
            discreption: "From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisesses and data-driven decisesses and data-driven decisions.",
            id: 3,
            imgs: [
                Img1,
                Img2,
            ]
        },
    ];

    return (
        <section className='overflow-hidden'>
            <HeaderSection title={'Student Projects'}/>
            <div className="student-projects main-container">
                <Container className='student-projects-flex bounceInUp'>
                    {projects?.map((e, i) => <StudentProjectCard key={i} info={e}/>)}
                </Container>
            </div>
        </section>
    )
}

export default StudentProjects