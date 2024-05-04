import React, { useEffect } from "react";
import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle";
import InfoCard from "./InfoCard/InfoCard";
import Img1 from "./../../../images/ServicesSectionImages/student_services-removebg 1 (1).png";
import Img2 from "./../../../images/ServicesSectionImages/student_services-removebg 1.png";
import "./OurServices.css";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const OurServices = () => {
  const services = [
    {
      title: "Company Services",
      url: "/company-services",
      img: Img1,
    },
    {
      title: "Student Services",
      url: "/student-section-services",
      img: Img2,
    },
  ];

  const { inView, ref } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  let topRef = useRef(null);
  topRef = ref;

  return (
    <section
      ref={topRef}
      id="services"
      className={`main-section our-services ${inView ? "fade-in-bottom" : ""}`}
    >
      <MainHomeTitle title={"Our Services"} />
      <div className="wallpaper position-relative z-1" />
      <div className="services-cards d-flex justify-content-between flex-wrap align-items-center position-relative z-1">
        {services.map((service, index) => (
          <InfoCard key={index} info={service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
