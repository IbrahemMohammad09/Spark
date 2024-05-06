import React, { useEffect, useRef, useState } from "react";
import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle";
import InfoCard from "./InfoCard/InfoCard";
import Icon1 from "../../../images/ServicesSectionImages/Frame 1597884162.svg";
import Icon2 from "../../../images/ServicesSectionImages/Frame 1597884163.svg";
import Icon3 from "../../../images/ServicesSectionImages/Frame 1597884164.svg";
import Icon4 from "../../../images/ServicesSectionImages/Frame 1597884165.svg";
import "./OurTopServices.css";
import { useInView } from "react-intersection-observer";
const OurTopServices = () => {
  const topServices = [
    {
      title: "Web Development",
      url: "/",
      subtitle:
        "Developing websites using the latest technologies with continuous and permanent technical support",
      icon: Icon1,
    },
    {
      title: "UI/UX Design",
      url: "/",
      subtitle:
        "Designing user interfaces for a wider and easier experience with applications",
      icon: Icon2,
    },
    {
      title: "Branding",
      url: "/",
      subtitle: "Visual identity design including logos, colors, and fonts",
      icon: Icon3,
    },
    {
      title: "E-Marketing",
      url: "/",
      subtitle: "E-marketing and social media platform management",
      icon: Icon4,
    },
  ];

  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const initScrollY = useRef(window.scrollY);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY !== initScrollY.current) {
        setUserHasScrolled(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (inView && userHasScrolled) {
      setHasBeenInView(true);
    }
  }, [inView, userHasScrolled]);
  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <section id="services" className="top-services position-relative z-1">
      <MainHomeTitle
        title={"Our Top Services"}
        subtitle={
          "We are committed to providing advanced and innovative technological services that meet customer needs and exceed their expectations, focusing on quality, innovation and efficiency."
        }
      />
      <div
        ref={ref}
        className={`top-services-cards ${
          hasBeenInView && inView ? "fade-top-services" : ""
        }`}
      >
        {topServices.map((service, index) => (
          <InfoCard key={index} info={service} num={`name${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default OurTopServices;
