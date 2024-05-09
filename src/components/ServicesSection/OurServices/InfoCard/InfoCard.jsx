import "./InfoCard.css";
import MainButton from "../../../SharedComponents/MainButton/MainButton";
import { Loading } from "../../../Loading/Loading";
import { useState } from "react";
import generateAlt from "../../../../utils/GenerateImageAlt";
const InfoCard = ({ info }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="info-card">
      <div>
        <h1>{info.title}</h1>
        <MainButton
          title={"View More"}
          url={info.url}
          addStyle={"mx-auto mt-3"}
        />
      </div>
      <div>
        {isLoading && <Loading color="#2fb0cd" />}
        <img
          src={info.img}
          alt={generateAlt(info.img)}
          loading="lazy"
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default InfoCard;
