import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./our-team.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Axios } from "../../api/axios";
import { BaseURL } from "../../utils/constants";
import Skeleton from "react-loading-skeleton";
import NavigationBar from "../../pages/NavigationBar/NavigationBar";

const OurTeam = () => {
  const [teamData, setTeamData] = useState(null);

  const getTeamData = async () => {
    try {
      const res = await Axios.get("rest/member_list/");
      setTeamData(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <section className="our-team" id="our-team">
      <NavigationBar sectionName="our-team" />
      <Container>
        <h1>Our Team</h1>
      </Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination
        navigation
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {teamData?.members.map((member) =>
          member ? (
            <SwiperSlide key={member.id}>
              <div className="slide-body">
                <img
                  className="d-block mx-auto"
                  src={BaseURL + member?.member_picture}
                  alt=""
                />
                <h3 className="w-fit text-center mx-auto d-flex gap-1 flex-column flex-md-row">
                  {member?.member_name.EN}
                  <span className="d-none d-md-block">,</span>
                  <span>{member?.member_position.EN}</span>
                </h3>
                <p>{member?.member_desc.EN}</p>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide>
              <Skeleton height={300} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default OurTeam;
