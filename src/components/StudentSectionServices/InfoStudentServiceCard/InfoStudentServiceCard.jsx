import MainButton from "../../SharedComponents/MainButton/MainButton";
import { BaseURL } from "../../../utils/constants";
import { useState } from "react";
import "./InfoStudentServiceCard.css";
import { Loading } from "../../Loading/Loading";
import generateAlt from "../../../utils/GenerateImageAlt";
const InfoStudentServiceCard = ({ info }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleTitleSplit = (index) => {
    return info.name.split(" ")[index];
  };

  return (
    <div className="student-service-section-card bounceInUp">
      <div className="img-cover">
        {isLoading && <Loading color="#2fb0cd" />}
        <img
          src={info.section_image_web}
          // src={`${BaseURL}${info.section_image_web}`}
          // alt={ generateAlt(info.section_image)}
          loading="lazy"
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div>
        <div>
          <h1>{handleTitleSplit(0)}</h1>
          <h2>{handleTitleSplit(1) || "Engineering"}</h2>
        </div>
        <MainButton
          title={"See all"}
          url={`/student-services/${info.pk}`}
          addStyle="student-service-section-card-main-button"
        />
      </div>
    </div>
  );
};

export default InfoStudentServiceCard;
