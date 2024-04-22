import MainButton from "../SharedComponents/MainButton/MainButton"
import MainHomeTitle from "../SharedComponents/MainHomeTitle/MainHomeTitle"
import Img1 from '../../images/OurProjectsImage/UI Design.png'
import Img2 from '../../images/OurProjectsImage/Home Page 9.png'
import InfoCard from "./InfoCard/InfoCard"
import './ProjectsSection.css'
import { Container } from "react-bootstrap"

const ProjectsSection = () => {
    const projects = [
        {
            title:'MStore',
            subtitle: 'Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress',
            type: 'Development Project',
            img: Img1
        },
        {
            title:'Beauty',
            subtitle: 'Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress',
            type: 'Development Project',
            img: Img2
        },
    ];

    return (
        <section id="our-projects">
            <Container className="main-section our-projects position-relative">
                <MainHomeTitle title={'Our Projects'}/>
                <div className="our-projects-cards">
                    {projects?.map((e, i) => <InfoCard key={i} info={e}/>)}
                </div>
                <MainButton url={'/'} title={'See all'} addStyle={'projects-button-see-all'}/>
            </Container>
        </section>
    )
}

export default ProjectsSection