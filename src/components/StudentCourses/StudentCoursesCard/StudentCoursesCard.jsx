import MainButton from "../../SharedComponents/MainButton/MainButton";
import "./StudentCoursesCard.css";
import { useLanguageContext } from "../../../hooks/useLanguageContext";
import { Loading } from "../../Loading/Loading";
import { useState } from "react";
const StudentCoursesCard = ({ info }) => {
  const { language } = useLanguageContext();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="student-course-card">
      <div className="student-course-img-box">
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
      <div className="student-course-info-box">
        <h1>{info.project_name[language]}</h1>
        <h2>{info.project_field[language]}</h2>
        <h3>{info.project_desc[language]}</h3>
        <MainButton
          title={"Request Now"}
          url={`/student-course-request/${info.pk}`}
          addStyle="student-course-card-main-button"
        />
      </div>
    </div>
  );
};

export default StudentCoursesCard;
