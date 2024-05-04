import MainButton from "../../SharedComponents/MainButton/MainButton";
import "./StudentProjectCard.css";
import { useLanguageContext } from "../../../hooks/useLanguageContext";
import { Loading } from "../../Loading/Loading";
import { useState } from "react";

const StudentProjectCard = ({ info }) => {
  const { language } = useLanguageContext();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="student-project-card">
      <div className="student-project-img-box">
        <div>
          {info.pictures.map((picture, index) => (
            <>
              {isLoading && <Loading color="#2fb0cd" />}
              <img
                key={index}
                src={picture.image}
                style={{ display: isLoading ? "none" : "block" }}
                onLoad={() => setIsLoading(false)}
              />
            </>
          ))}
        </div>
      </div>
      <div className="student-project-info-box">
        <h1>{info.project_name[language]}</h1>
        <h2>{info.project_field[language]}</h2>
        <h3>{info.project_desc[language]}</h3>
        <MainButton
          title={"Request Now"}
          url={`/student-project-request/${info.pk}`}
          addStyle="student-project-card-main-button"
        />
      </div>
    </div>
  );
};

export default StudentProjectCard;
