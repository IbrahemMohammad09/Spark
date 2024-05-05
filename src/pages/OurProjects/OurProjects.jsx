import SEO from "../../components/SharedComponents/SEO/SEO"
import './OurProjects.css'
import Img1 from '../../images/OurProjectsImages/Bill Sitting using laptop 1.webp'
import Img2 from '../../images/OurProjectsImages/Frame 1597884239.webp'
import OurProjectCard from "../../components/OurProjects/OurProjectCard/OurProjectCard"
import Img from '../../images/OurProjectsImages/project.webp'
import '../../animation.css'

const OurProjects = () => {
    const projects = [
        {
            id: 1,
            img: Img,
            title: 'Memory App',
            type: 'Flutter App',
            subtitle: 'From automation to advanced analytics and seamless experiences, we can embed AI in busines',
            url: 'https://MRR.com',
        },
        {
            id: 2,
            img: Img,
            title: 'Memory App',
            type: 'Flutter App',
            subtitle: 'From automation to advanced analytics and seamless experiences, we can embed AI in busines',
            url: 'https://MRR.com',
        },
        {
            id: 3,
            img: Img,
            title: 'Memory App',
            type: 'Flutter App',
            subtitle: 'From automation to advanced analytics and seamless experiences, we can embed AI in busines',
            url: 'https://MRR.com',
        },
        {
            id: 4,
            img: Img,
            title: 'Memory App',
            type: 'Flutter App',
            subtitle: 'From automation to advanced analytics and seamless experiences, we can embed AI in busines',
            url: 'https://MRR.com',
        }
    ]

    const description = 'Our projects involve creating user-friendly interfaces that make navigating websites or apps a breeze. we focus on understanding the needs and behaviors of users to create designs that not only look good but also function intuitively.';

    return (

        <section className="our-projects-page position-relative ">
            <SEO title={'Spark | Our projects'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
            <div className="top-section">
                <div className="design-box">
                    <img src={Img1} alt={Img1} loading="lazy" />
                    <img src={Img2} alt={Img2} loading="lazy" />
                </div>
                <h1 className="title-text">{description}</h1>
            </div>
            <div className="our-projects-cards main-container bounceInUp">
                <h2 className="title">Our Projects</h2>
                <div className="our-projects-grid ">
                    {projects.map((e, i) => <OurProjectCard key={i} info={e}/>)}
                </div>
            </div>
        </section>
    )
}

export default OurProjects