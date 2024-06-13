import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import { useInView } from "react-intersection-observer";
import image1 from "../../images/gg.jpg";
import { BiArrowBack } from "react-icons/bi";
import "./ViewProject.css";
import Img from "../../images/ViewProjectImages/Mykonos.jpeg";
import Img1 from "../../images/WhatsApp Image 2024-06-07 at 16.58.23_f2acbe47.jpg";
import Img2 from "../../images/1,2.jpg";
import Img3 from "../../images/1,3.jpg";
import Img4 from "../../images/1,4-01.jpg";
import Img5 from "../../images/1,5-01.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const ViewProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const images= [
    {
      img:Img
    },
    {
      img:Img1
    },
    {
      img:Img2
    },
    {
      img:Img3
    },
    {
      img:Img4
    },
    {
      img:Img5
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="theContain">
      <div onClick={() => window.history.back()} className="back-button">
        <BiArrowBack />
      </div>
      <div className="viewContainer">
        <img src={image1} alt="image1" className="back-image" />
        <div className={`right-image ${inView ? "fade-in-bottom" : ""}`}>
          <Slider {...settings}>
            {images.map((image, index )=>(
              <div key={index}>
                <img src={image.img} alt={`Slide ${index}`} style={{ width: '100%' }} />
              </div>
            ))}
          </Slider>
        </div>
        <div
          ref={ref}
          className={`info-box active ${inView ? "fade-in-bottom" : ""} `}
        >
          <h1>Drop-in audio chat</h1>
          <h2>
            Spark is a software engineering company that specializes in
            developing cutting-edge solutions for various domains. We have a
            team of talented and passionate engineers who are always ready to
            take on new challenges and deliver high-quality products.
          </h2>
          <div className="buttons">
            <div className="visit-button">
              <MainButton
                url={"https://MRR.com"}
                title={"visit project"}
                addStyle={"projects-button-see-all"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
