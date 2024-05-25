import { useNavigate, useParams } from "react-router-dom";
import "./ViewProjectButton.css";
import { useEffect, useState } from "react";
import SEO from "../../components/SharedComponents/SEO/SEO";
import Img from "../../images/ViewProjectImages/Mykonos.jpeg";
import Img1 from "../../images/ViewProjectImages/ww.jpeg";
import Img2 from "../../images/ViewProjectImages/71fc178a-3216-4f88-a91f-c70a41eb749a.jpeg";
import Img3 from "../../images/ViewProjectImages/Blue Caves - Zante, Greece.jpeg";
import Img4 from "../../images/ViewProjectImages/download (40).jpeg";
import Img5 from "../../images/ViewProjectImages/PeqCi.jpeg";
import ImagesSwiper from "../../components/ViewProject/Swiper/ImagesSwiper";
import { BiArrowBack } from "react-icons/bi";
import generateAlt from "../../utils/GenerateImageAlt";
import { useInView } from "react-intersection-observer";
import { BiArrowFromTop } from "react-icons/bi";

import MainButton from "../../components/SharedComponents/MainButton/MainButton";
const ViewProjectButton = () => {
  // const [project, setProject] = useState({});
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  let { id } = useParams();

  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      img: Img,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
    {
      id: 2,
      img: Img1,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
    {
      id: 3,
      img: Img2,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
    {
      id: 4,
      img: Img3,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
    {
      id: 5,
      img: Img4,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
    {
      id: 6,
      img: Img5,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
    {
      id: 7,
      img: Img3,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
    {
      id: 8,
      img: Img4,
      title: "Drop-in audio chat",
      type: "Flutter App",
      subtitle:
        "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. ",
      url: "https://MRR.com",
    },
  ];

  const imgs = [Img, Img1, Img2, Img3, Img4, Img5];
  const [visible, setVisible] = useState(false);
  const data = projects?.find((e) => e.id == id);
  const handleSetMainImage = (img) => {
    setMainImage(img);
    // setProject(data);
    setIsClicked(true);
  };
  useEffect(() => {
    if (!data) {
      navigate("/error-page");
    } else {
      setHoveredImage(data.img);
      setMainImage(data.img);
    }
  }, [id]);
  useEffect(() => {
    setIsClicked(false);
  }, []);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="view-project main-container position-relative">
      <SEO
        title={"Spark | View project"}
        description={""}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software develpoment",
          "software engineer",
          "student services",
        ]}
      />
      {imgs &&
        imgs?.map((e, i) => (
          <img
            key={i}
            src={e}
            alt={generateAlt(e)}
            loading="lazy"
            className={`bg-img ${
              (mainImage == e || hoveredImage == e) && "active"
            }`}
          />
        ))}

      <div onClick={() => window.history.back()} className="back-button">
        <BiArrowBack />
      </div>
      <button
        className={`scroll-to-top ${visible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <BiArrowFromTop />
      </button>
      <ImagesSwiper
        hoveredImage={hoveredImage}
        imgs={imgs}
        mainImage={mainImage}
        setHoveredImage={setHoveredImage}
        setMainImage={handleSetMainImage}
      />
    </section>
  );
};

export default ViewProjectButton;
