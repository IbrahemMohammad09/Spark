import React, { useEffect, useRef, useState } from "react";
import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle";
import InfoCard from "./InfoCard/InfoCard";
import Icon1 from "../../../images/ServicesSectionImages/Frame 1597884162.svg";
import Icon2 from "../../../images/ServicesSectionImages/Frame 1597884163.svg";
import Icon3 from "../../../images/ServicesSectionImages/Frame 1597884164.svg";
import Icon4 from "../../../images/ServicesSectionImages/Frame 1597884165.svg";
import "./OurTopServices.css";
import { useInView } from "react-intersection-observer";
import { metaSEO } from "../../../utils/constants";
const OurTopServices = () => {
  const topServices = [
    {
      title: "Web Development",
      url: "/service/1",
      subtitle: metaSEO.servicesDetails.web.description[0],
      icon: Icon1,
    },
    {
      title: "UI/UX Design",
      url: "/service/8",
      subtitle:metaSEO.servicesDetails.ui.description[0],
      icon: Icon2,
    },
    {
      title: "Branding",
      url: "/service/5",
      subtitle: metaSEO.servicesDetails.branding.description[0],
      icon: Icon3,
    },
    {
      title: "E-Marketing",
      url: "/service/3",
      subtitle: metaSEO.servicesDetails.markiting.description[1],
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
        subtitle={metaSEO.topServices.description}
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
