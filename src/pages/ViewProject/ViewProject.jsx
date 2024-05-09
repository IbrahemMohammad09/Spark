import { useNavigate, useParams } from 'react-router-dom'
import './ViewProject.css'
import { useEffect, useState } from 'react';
import SEO from '../../components/SharedComponents/SEO/SEO';
// import Img from '../../images/OurProjectsImages/project.webp'
// import Img1 from '../../images/ViewProjectImages/Rectangle 4.png'
// import Img2 from '../../images/ViewProjectImages/Rectangle 5.png'
// import Img3 from '../../images/ViewProjectImages/Rectangle 7.png'
// import Img4 from '../../images/ViewProjectImages/Rectangle 8.png'
// import Img5 from '../../images/ViewProjectImages/Rectangle 9.png'
import Img from '../../images/ViewProjectImages/Mykonos.jpeg'
import Img1 from '../../images/ViewProjectImages/ww.jpeg'
import Img2 from '../../images/ViewProjectImages/71fc178a-3216-4f88-a91f-c70a41eb749a.jpeg'
import Img3 from '../../images/ViewProjectImages/Blue Caves - Zante, Greece.jpeg'
import Img4 from '../../images/ViewProjectImages/download (40).jpeg'
import Img5 from '../../images/ViewProjectImages/PeqCi.jpeg'
import ImagesSwiper from '../../components/ViewProject/Swiper/ImagesSwiper';
import MainButton from '../../components/SharedComponents/MainButton/MainButton';
import { BiArrowBack } from 'react-icons/bi';
import generateAlt from '../../utils/GenerateImageAlt';


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
        <section className="view-project main-container position-relative">
            <SEO title={'Spark | View project'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
            {imgs && imgs?.map((e, i) => <img key={i} src={e} alt={generateAlt(e)} loading='lazy' className={`bg-img ${(mainImage == e || hoveredImage == e) && 'active'}`}/>)}
            <div className={`info-box ${mainImage == imgs[0] && 'active'}`}>
                <h1>{project.title}</h1>
                <h2>{project.subtitle}</h2>
                <h3>
                    <a href={project.url}>{project.url}</a>
                </h3>
            </div>
            <div onClick={() => window.history.back()} className='back-button'>
                <MainButton title={<><BiArrowBack/> Back</>} addStyle='main-back-button'/>
            </div>
            <ImagesSwiper imgs={imgs} mainImage={mainImage} setHoveredImage={setHoveredImage} setMainImage={setMainImage}/>
        </section>
    )
}

export default ViewProject