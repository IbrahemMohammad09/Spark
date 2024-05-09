import React, { useEffect } from "react";
import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle";
import InfoCard from "./InfoCard/InfoCard";
import Img1 from "./../../../images/ServicesSectionImages/student_services-removebg 1 (1).webp";
import Img2 from "./../../../images/ServicesSectionImages/student_services-removebg 1.webp";
import "./OurServices.css";
import { useInView } from "react-intersection-observer";
import { metaSEO } from "../../../utils/constants";

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
    threshold: 0.1,
  });

  return (
    <section id="services" className="main-section our-services ">
      <MainHomeTitle title={"Our Services"} subtitle={metaSEO.services.description} />
      <div className="wallpaper position-relative z-1" />
      <div
        ref={ref}
        className={` ${
          inView ? "fade-in-bottom-services" : ""
        } services-cards d-flex justify-content-between flex-wrap align-items-center position-relative z-1`}
      >
        {services.map((service, index) => (
          <InfoCard key={index} info={service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
