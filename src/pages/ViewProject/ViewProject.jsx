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
import { useLanguageContext } from "../../hooks/useLanguageContext";
import { Loading } from "../../components/Loading/Loading";

export const ViewProject = () => {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { language } = useLanguageContext();

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
    <div className="theContain">
        {isLoading && <div className="center-loading"><Loading color={'#2fb0cd'}/></div>}
        <div onClick={() => window.history.back()} className="back-button" title="back">
          <BiArrowBack className="text-dark"/>
        </div>
        <div className="viewContainer">
          <img src={image1} alt="image1" className="back-image" />
          {project && <>
          <div
            ref={ref}
            className={`info-box active ${inView ? "fade-in-bottom" : ""} `}
          >
            <h1>{project.project_name[language]}</h1>
            <h3>{project.project_field[language]}</h3>
            <h2>
              {project.project_desc[language]}
            </h2>
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
          <div className={`right-image ${inView ? "fade-in-bottom" : ""}`}>
            <Slider {...settings}>
              {project.web_pictures.map((e, index) => (
                <div key={index}>
                  <img src={e.image} alt={`Slide ${index}`} />
                </div>
              ))}
            </Slider>
          </div></>}
        </div>
      </div>
  );
};
