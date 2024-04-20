import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./our-team.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Axios } from "../../api/axios";
import { BaseURL } from "../../utils/constants";

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
    <section className="our-team">
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
        {teamData?.members.map((member) => (
          <SwiperSlide key={member.id} className="d-flex flex-column gap-3">
            <div className="slide-body">
              <img src={BaseURL + member?.member_picture} alt="" />
              <h3 className="w-fit mx-auto">
                {member?.member_name.EN}{" "}
                <span>{member?.member_position.EN}</span>
              </h3>
              <p>{member?.member_desc.EN}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurTeam;
