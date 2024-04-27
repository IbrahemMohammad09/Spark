import MainButton from "../SharedComponents/MainButton/MainButton";
import MainHomeTitle from "../SharedComponents/MainHomeTitle/MainHomeTitle";
import Img1 from "../../images/OurProjectsImage/UI Design.png";
import Img2 from "../../images/OurProjectsImage/Home Page 9.png";
import InfoCard from "./InfoCard/InfoCard";
import "./ProjectsSection.css";
import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import TabTitle from "../../utils/TabTitle";

const ProjectsSection = () => {
  TabTitle("Spark | Our projects");
  const projects = [
    {
      title: "MStore",
      subtitle:
        "Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress",
      type: "Development Project",
      img: Img1,
    },
    {
      title: "Beauty",
      subtitle:
        "Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress",
      type: "Development Project",
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
    <section id="ourProject">
      <Container className="main-section our-projects position-relative">
        <MainHomeTitle title={"Our Projects"} />
        <div ref={ref} className={`${inView ? "fade-in-bottom" : ""}`}>
          <div className="our-projects-cards">
            {projects?.map((e, i) => (
              <InfoCard key={i} info={e} />
            ))}
          </div>
          <MainButton
            url={"/"}
            title={"See all"}
            addStyle={"projects-button-see-all"}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
