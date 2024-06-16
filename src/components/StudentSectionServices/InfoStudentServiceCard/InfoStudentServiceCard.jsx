import MainButton from "../../SharedComponents/MainButton/MainButton";
import { BaseURL } from "../../../utils/constants";

import "./InfoStudentServiceCard.css";
import { Loading } from "../../Loading/Loading";
import generateAlt from "../../../utils/GenerateImageAlt";
const InfoStudentServiceCard = ({ info, isLoading }) => {
  const handleTitleSplit = (index) => {
    return info.name.EN.split(" ")[index];
  };

  return (
    <div className="student-service-section-card bounceInUp">
      <div className="img-cover">
        {isLoading && <Loading color="#2fb0cd" />}
        <img

          src={`${BaseURL}${info.section_image_web}`}
          alt={generateAlt(info.section_image_web)}
          loading="lazy"
          style={{ display: isLoading ? "none" : "block" }}
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
