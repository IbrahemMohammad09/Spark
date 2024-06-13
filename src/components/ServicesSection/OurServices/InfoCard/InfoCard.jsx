import "./InfoCard.css";
import MainButton from "../../../SharedComponents/MainButton/MainButton";
import { Loading } from "../../../Loading/Loading";
import React, { useEffect, useState } from "react";
import generateAlt from "../../../../utils/GenerateImageAlt";

const InfoCard = ({ info }) => {
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    setIsLoading(true);
  }, []);
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
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
    </div>
  );
};

export default InfoCard;
