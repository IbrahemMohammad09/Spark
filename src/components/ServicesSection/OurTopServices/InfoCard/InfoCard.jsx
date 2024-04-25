import "./InfoCard.css";
import Icon from "../../../../images/ServicesSectionImages/uil_arrow-up (1).svg";
import { Link } from "react-router-dom";

const InfoCard = ({ info, num }) => {
  return (
    <div className={`${num} topservice-info-card`}>
      <img className="topservice-icon" src={info.icon} alt={info.icon} />
      <h1>{info.title}</h1>
      <h6>{info.subtitle}</h6>
      <span>
        <Link to={info.url}>Start with us</Link>
        <img src={Icon} alt={"icon"} />
      </span>
    </div>
  );
};

export default InfoCard;
