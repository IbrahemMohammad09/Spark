import MainButton from "../../SharedComponents/MainButton/MainButton";
import "./InfoCard.css";
import { Loading } from "../../Loading/Loading";
import { useState } from "react";
import generateAlt from "../../../utils/GenerateImageAlt";
const InfoCard = ({ info }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="project-card">
      <div className="project-card-top">
        <div>
          <h1>{info.title}</h1>
          <h3>{[...info.subtitle].map((e, i) => i <= 60 && e)}</h3>
          <MainButton title={info.type} addStyle={"project-card-button"} />
        </div>
        {isLoading && <Loading color="#2fb0cd" />}
        <img
          src={info.img}
          alt={generateAlt(info.img)}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="project-card-bottom">
        <h1>{info.title}</h1>
        <h3>{info.subtitle}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
