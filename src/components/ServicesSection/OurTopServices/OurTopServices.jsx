import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle";
import InfoCard from "./InfoCard/InfoCard";
import Icon1 from "../../../images/ServicesSectionImages/Frame 1597884162.svg";
import Icon2 from "../../../images/ServicesSectionImages/Frame 1597884163.svg";
import Icon3 from "../../../images/ServicesSectionImages/Frame 1597884164.svg";
import Icon4 from "../../../images/ServicesSectionImages/Frame 1597884165.svg";
import "./OurTopServices.css";
import { useEffect } from "react";
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
      title: "UI/UX Desigen",
      url: "/",
      subtitle:
        "design user interfaces to give him a wider and easier experience in dealing with applications.",
      icon: Icon2,
    },
    {
      title: "Branding",
      url: "/",
      subtitle:
        "Visual identity design including all elements of logo, colors and fonts",
      icon: Icon3,
    },
    {
      title: "E-Marketing",
      url: "/",
      subtitle: "E-marketing and management of social media platforms.",
      icon: Icon4,
    },
  ];
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the item is visible
  });


  // Log values to console whenever inView or entry changes
  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);
  return (
    <div className="top-services position-relative z-1">
      <MainHomeTitle
        title={"Our Top Services"}
        subtitle={
          "We are committed to providing advanced and innovative technological services that meet customer needs and exceed their expectations, focusing on quality, innovation and efficiency."
        }
      />
      <div ref={ref} className={`${inView ? "fade-top-services" : ""}`}>
        <div className="top-services-cards">
          {topServices.map((e, i) => (
            <InfoCard key={i} info={e} num={`name${String(i + 1)}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTopServices;
