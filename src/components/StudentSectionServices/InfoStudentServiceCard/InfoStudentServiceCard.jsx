import MainButton from "../../SharedComponents/MainButton/MainButton";
import { BaseURL } from "../../../utils/constants";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./InfoStudentServiceCard.css";

const InfoStudentServiceCard = ({ info }) => {
  const handleTitleSplit = (index) => {
    return info.section_name.split(" ")[index];
  };
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
    <div
      ref={ref}
      className={`${
        inView ? "fade-in-bottom" : ""
      } student-service-section-card bounceInUp`}
    >
      <div className="img-cover">
        <img
          src={`${BaseURL}/${info.section_image}`}
          alt={info.section_image}
          loading="lazy"
        />
      </div>
      <div>
        <div>
          <h1>{handleTitleSplit(0)}</h1>
          <h2>{handleTitleSplit(1) || "Engineering"}</h2>
        </div>
        <MainButton
          title={"See all"}
          url={`/student-services/${info.id}`}
          addStyle="student-service-section-card-main-button"
        />
      </div>
    </div>
  );
};

export default InfoStudentServiceCard;
