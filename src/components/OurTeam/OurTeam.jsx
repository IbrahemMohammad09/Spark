import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "./our-team.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Axios } from "../../api/axios";
import { BaseURL } from "../../utils/constants";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import TabTitle from "../../utils/TabTitle";
import { Loading } from "../Loading/Loading";
import SEO from "../SharedComponents/SEO/SEO";

const OurTeam = () => {
  const [teamData, setTeamData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getTeamData = async () => {
    try {
      const res = await Axios.get("rest/member_list_web/");
      setTeamData(res.data);
    } catch (error) {
      // console.log(error);
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
      <SEO title={'Spark | Our team'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
      <Container>
        <h1>Our Team</h1>
      </Container>
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
          {teamData?.members.map((member) =>
            member ? (
              <SwiperSlide key={member.id}>
                <div className="slide-body">
                  <div className="slide-content">
                    <div className="image-container">
                      {isLoading && <Loading color="#2fb0cd" />}
                      <img
                        className="d-block mx-auto"
                        src={BaseURL + member?.member_picture_web}
                        alt=""
                        style={{ display: isLoading ? "none" : "block" }}
                        onLoad={() => setIsLoading(false)}
                      />
                    </div>
                    <div className="text-container">
                      <div className="head-swiper">
                        <h3>{member?.member_name.EN}.,</h3>
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
