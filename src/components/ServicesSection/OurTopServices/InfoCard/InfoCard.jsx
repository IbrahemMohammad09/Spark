import "./InfoCard.css";
import Icon from "../../../../images/ServicesSectionImages/uil_arrow-up (1).svg";
import { Link } from "react-router-dom";
import { Loading } from "../../../Loading/Loading";
import { useState } from "react";
import generateAlt from "../../../../utils/GenerateImageAlt";

const InfoCard = ({ info, num }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={`${num} topservice-info-card`}>
      {isLoading && <Loading color="white" />}
      <img
        className="topservice-icon"
        src={info.icon}
        alt={generateAlt(info.icon)}
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={() => setIsLoading(false)}
      />
      <h1>{info.title}</h1>
      <h6>{info.subtitle}</h6>
      <span>
        <Link to={info.url}>Start with us</Link>
        <img src={Icon} alt={generateAlt(Icon)} />
      </span>
    </div>
  );
};

export default InfoCard;
