import { useLanguageContext } from "../../../hooks/useLanguageContext";
import MainButton from "../../SharedComponents/MainButton/MainButton";
import "./ServiceCard.css";
import { Loading } from "../../Loading/Loading";
import { BaseURL } from "../../../utils/constants";

const ServiceCard = ({ info, isLoading }) => {
  const { language } = useLanguageContext();

  return (
    <div className="company-service-card">
      <div className="img-cover">
        {isLoading && <Loading color="#2fb0cd" />}
        <img
          src={`${BaseURL}/${info?.service_picture_web}`}
          alt={info?.service_picture}
          loading="lazy"
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
      <div className="company-service-card-info">
        <h1>{info?.name.EN}</h1>
        <MainButton
          title={"See more details"}
          url={`/service/${info.pk}`}
          addStyle="company-service-card-button"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
