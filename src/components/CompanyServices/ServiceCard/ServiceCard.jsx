import { useLanguageContext } from "../../../hooks/useLanguageContext";
import MainButton from "../../SharedComponents/MainButton/MainButton";
import { BaseURL } from "../../../utils/constants";
import "./ServiceCard.css";
const ServiceCard = ({ info }) => {
  const { language } = useLanguageContext();

  return (
    <div className="company-service-card">
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
