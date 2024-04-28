import { useLanguageContext } from "../../../hooks/useLanguageContext";
import MainButton from "../../SharedComponents/MainButton/MainButton";
import { BaseURL } from "../../../utils/constants";
import "./ServiceCard.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const ServiceCard = ({ info }) => {
  const { language } = useLanguageContext();
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
      className={`${inView ? "fade-in-bottom" : ""} company-service-card`}
    >
      <div className="img-cover">
        <img
          src={`${BaseURL}/${info?.service_picture}`}
          alt={info?.service_picture}
          loading="lazy"
        />
      </div>
      <div className="company-service-card-info">
        <h1>{info?.service_name[language]}</h1>
        <MainButton
          title={"See more details"}
          url={`/service/${info.id}`}
          addStyle="company-service-card-button"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
