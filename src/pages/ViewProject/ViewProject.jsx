import { useNavigate, useParams } from 'react-router-dom'
import './ViewProject.css'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Img from '../../images/OurProjectsImages/project.webp'
import SEO from '../../components/SharedComponents/SEO/SEO';
import Img1 from '../../images/ViewProjectImages/Rectangle 4.png'
import Img2 from '../../images/ViewProjectImages/Rectangle 5.png'
import Img3 from '../../images/ViewProjectImages/Rectangle 7.png'
import Img4 from '../../images/ViewProjectImages/Rectangle 8.png'
import Img5 from '../../images/ViewProjectImages/Rectangle 9.png'
import ImagesSwiper from '../../components/ViewProject/Swiper/ImagesSwiper';


const ViewProject = () => {
    const [project, setProject] = useState({});

    const [hoveredImage, setHoveredImage] = useState(null);

    const [mainImage, setMainImage] = useState(null);

    let { id } = useParams();

    const navigate = useNavigate();
    
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

    const imgs = [Img, Img1, Img2, Img3, Img4, Img5];

    useEffect(() => {
        const data = projects?.find((e) => e.id == id);

        if(!data) {
            navigate('/error-page');
        } else {
            setProject(data);
            setHoveredImage(data.img);
            setMainImage(data.img);
        }

    }, [id]);


    return (
        <section className="view-project main-container">
            <SEO title={'Spark | View project'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
            {imgs && imgs?.map((e, i) => <img key={i} src={e} alt={e} loading='lazy' className={`bg-img ${hoveredImage == e && 'active'}`} onMouseEnter={() => setHoveredImage(e)} onMouseLeave={() => setHoveredImage(mainImage)} onClick={() => setMainImage(e)}/>)}
            <div className='info-box'>
                <h1>{project.title}</h1>
                <h2>{project.subtitle}</h2>
                <h3>
                    <a href={project.url}>{project.url}</a>
                </h3>
            </div>
            <ImagesSwiper imgs={imgs} mainImage={mainImage} setHoveredImage={setHoveredImage} setMainImage={setMainImage}/>
        </section>
    )
}

export default ViewProject