import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle";
import "./OurServices.css";
import React, { useLayoutEffect, useEffect, useRef, forwardRef } from "react";
import Img1 from "./../../../images/ServicesSectionImages/student_services-removebg 1 (1).png";
import Img2 from "./../../../images/ServicesSectionImages/student_services-removebg 1.png";
import InfoCard from "./InfoCard/InfoCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const FadeIn = forwardRef(({ children, stagger = 0, y = 0 }, ref) => {
  const el = useRef();
  const animation = useRef();
  useGSAP(() => {
    animation.current = gsap.from(el.current.children, {
      opacity: 0.9,
      stagger,
      duration: 1,
      delay: 0.25,
      ease: "steps(1)",
      y,
    });
  });

  useGSAP(() => {
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return <span ref={el}>{children}</span>;
});

const OurServices = () => {

  const services = [
    {
      title: "Company Services",
      url: "/",
      img: Img1,
    },
    {
      title: "Student Services",
      url: "/",
      img: Img2,
    },
  ];
  const animation = useRef();

  const toggle = () => {
    animation.current.reversed(!animation.current.reversed());
  };

  return (
    <div className="main-section our-services circle">
      <MainHomeTitle title={"Our Services"} />
      <FadeIn stagger={1} y={350} ref={animation}>
        <div className="wallpaper position-relative z-1" />
      </FadeIn>
      <FadeIn stagger={1} y={300} ref={animation}>
        <div className="services-cards d-flex justify-content-between flex-wrap align-items-center position-relative z-1">
          {services.map((e, i) => (
            <InfoCard key={i} info={e} />
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default OurServices;
