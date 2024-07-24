import { useEffect, useState } from "react";
import { useRef } from "react";
import "./our-team.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BaseURL, metaSEO } from "../../utils/constants";
import { useInView } from "react-intersection-observer";
import { Loading } from "../Loading/Loading";
import SEO from "../SharedComponents/SEO/SEO";
import generateAlt from "../../utils/GenerateImageAlt";
import MainHomeTitle from "../SharedComponents/MainHomeTitle/MainHomeTitle";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import axios from "axios";

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://sparkeng.pythonanywhere.com/rest/member_list_web/")
      .then(res=>{
        if(res.data){
          setTeamData(res.data.members);
          setIsLoading(false);
        }else{
          setIsLoading(false);
        }
      })
      .catch(error=>{
        setIsLoading(false);
      });
    }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
      <div style={{
        paddingRight: '9.750px',
        paddingLeft: '9.750px',        
      }}>
        <MainHomeTitle
          title={"Our Team"}
          subtitle={metaSEO.ourTeam.description}
        />
      </div>
      <div
        ref={ref}
        className={`swiper-container ${inView ? "fade-in-bottom" : ""}`}
      >
            {isLoading && <div className="center-loading">
            <Loading color={'#2fb0cd'}/>
          </div>}
        <Slider
          {...settings}
          ref={sliderRef}
          className="swiper"
        >
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
        {inView && 
          <div
            className="swiper-button-prev text-white"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <MdArrowBackIos className="slider-icon"/>
          </div>}
          {inView && <div
            className="swiper-button-next text-white"
            onClick={() => sliderRef.current.slickNext()}
          >
            <MdArrowForwardIos className="slider-icon"/>
          </div>}
      </div>
    </section>
  );
};

export default OurTeam;
