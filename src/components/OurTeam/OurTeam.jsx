import { useEffect, useState } from "react";
import { useRef } from "react";
import "./our-team.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Axios } from "../../api/axios";
import { BaseURL, metaSEO } from "../../utils/constants";
// import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import { Loading } from "../Loading/Loading";
import SEO from "../SharedComponents/SEO/SEO";
import generateAlt from "../../utils/GenerateImageAlt";
import MainHomeTitle from "../SharedComponents/MainHomeTitle/MainHomeTitle";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const getTeamData = async () => {
    setIsLoading(true);
    try {
      const res = await Axios.get("rest/member_list_web/");
      setTeamData(res.data.members);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // Navigate('/error-page')
    }
  };
  useEffect(() => {
    getTeamData();
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sliderRef = useRef();

  return (
    <section className="our-team" id="our_team">
      <SEO
        title={"Spark | Our team"}
        description={metaSEO.ourTeam.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "team management",
          "software team",
          "our team",
        ]}
      />
      <MainHomeTitle
        title={"Our Team"}
        subtitle={metaSEO.ourTeam.description}
      />
      <div
        ref={ref}
        className={`swiper-container ${inView ? "fade-in-bottom" : ""}`}
      >
        <Slider
          {...settings}
          ref={sliderRef}
          className="swiper"
        >
          {isLoading && <Loading color={'#2fb0cd'}/>}
          {teamData && teamData?.map((member, index) => (
              <div className="swiper-slide" key={index}>
                <div className="slide-body">
                  <div className="slide-content">
                    {isLoading && <Loading color="#2fb0cd" />}
                    <div className="image-container">
                      <img
                        className="d-block mx-auto"
                        src={BaseURL + member?.member_picture_web}
                        alt={generateAlt(member?.member_picture_web)}
                        style={{ display: isLoading ? "none" : "block" }}
                      />
                    </div>
                    <div className="text-container">
                      <div className="head-swiper">
                        <h3>{member?.member_name.EN}</h3>
                        <span>{member?.member_position.EN}</span>
                      </div>
                      <p>{member?.member_desc.EN}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
        <div
            className="swiper-button-prev text-white"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <MdArrowBackIos className="slider-icon"/>
          </div>
          <div
            className="swiper-button-next text-white"
            onClick={() => sliderRef.current.slickNext()}
          >
            <MdArrowForwardIos className="slider-icon"/>
          </div>
      </div>
    </section>
  );
};

export default OurTeam;
