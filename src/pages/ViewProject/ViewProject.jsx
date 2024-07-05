import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import { useInView } from "react-intersection-observer";
import image1 from "../../images/gg.jpg";
import { BiArrowBack } from "react-icons/bi";
import "./ViewProject.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";
import SEO from "../../components/SharedComponents/SEO/SEO";

export const ViewProject = () => {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://sparkeng.pythonanywhere.com/rest/our_project_details/${id}`)
      .then(res => {
        if(res.data) {
          setProject(res.data);
          setIsLoading(false)
        } else {
          setIsLoading(false)
          navigate('/error');
        }
      })
      .catch(err => {
        setIsLoading(false)
        navigate('/error');
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="view-project">
        <SEO
          title={project && "Spark - " + project?.project_name['EN']}
          description={project && project?.project_desc['EN']}
          name={"Spark"}
          type={"website"}
          keywords={[
            "software project",
            project && project?.project_name['EN'],
            project && project?.project_field['EN'],
          ]}
        />
          {isLoading && <div className="view-project-loading"><Loading color={'#2fb0cd'}/></div>}
          <img src={image1} alt="background as wallpaper" className="back-image desktop-style" />
          <div onClick={() => window.history.back()} className="back-button" title="back">
            <BiArrowBack className="text-dark fs-5"/>
          </div>
          {project && <div className="content container">
          <div
            className={`info-box ${inView ? "fade-in-bottom" : ""} `}
          >
            <h1>{project.project_name['EN']}</h1>
            <h2>{project.project_field['EN']}</h2>
            <h3>
              {project.project_desc['EN']}
            </h3>
            <div className="buttons">
              <div className="visit-button">
                {
                  project.project_link !== 'https://www.google.com' &&
                  <MainButton
                    url={project.project_link}
                    title={"visit project"}
                    addStyle={"projects-button-see-all"}
                  />
                }
              </div>
            </div>
          </div>
          <div className={`projects-slider ${inView ? "fade-in-bottom" : ""}`}>
            <Slider {...settings}>
              {project.web_pictures.map((e, index) => (
                <div key={index} className="project-slide">
                  <img src={e.image} alt={`Slide ${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>}
        </div>
  );
};
