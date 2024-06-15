import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "./our-team.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Axios } from "../../api/axios";
import { BaseURL, metaSEO } from "../../utils/constants";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import { Loading } from "../Loading/Loading";
import SEO from "../SharedComponents/SEO/SEO";
import generateAlt from "../../utils/GenerateImageAlt";
import MainHomeTitle from "../SharedComponents/MainHomeTitle/MainHomeTitle";

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
      // Navigate('/error-page')
    }
  };
  useEffect(() => {
    getTeamData();
  }, []);

  const swiperRef = useRef();
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination
          navigation={false}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="test"
        >
          <div
            className="swiper-button-prev"
            onClick={() => swiperRef.current.slidePrev()}
          ></div>
          <div
            className="swiper-button-next"
            onClick={() => swiperRef.current.slideNext()}
          ></div>
          {isLoading && <Loading color={'#2fb0cd'}/>}
          {teamData && teamData?.map((member, index) =>
            member ? (
              <SwiperSlide key={index} id={member.id}>
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
              </SwiperSlide>
            ) : (
              <SwiperSlide>
                <Skeleton height={300} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default OurTeam;
