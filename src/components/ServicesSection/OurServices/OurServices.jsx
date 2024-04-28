
import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle";
import "./OurServices.css";
import Img1 from "./../../../images/ServicesSectionImages/student_services-removebg 1 (1).png";
import Img2 from "./../../../images/ServicesSectionImages/student_services-removebg 1.png";
import InfoCard from "./InfoCard/InfoCard";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  // Log values to console whenever inView or entry changes
  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);
  return (
    <div className="main-section our-services fade-in-bottom">
      <MainHomeTitle title={"Our Services"} />
      <div className="wallpaper position-relative z-1" />
      <div className="services-cards d-flex justify-content-between flex-wrap align-items-center position-relative z-1">
        {services.map((e, i) => (
          <InfoCard key={i} info={e} />
        ))}
      </div>
    </div>
  );
};


export default OurServices