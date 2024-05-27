import MainButton from "../../SharedComponents/MainButton/MainButton";
import "./StudentCoursesCard.css";
import { useLanguageContext } from "../../../hooks/useLanguageContext";
import { Loading } from "../../Loading/Loading";
import { useState } from "react";
import generateAlt from "../../../utils/GenerateImageAlt";

const StudentCoursesCard = ({ info }) => {
  const { language } = useLanguageContext();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="student-course-card">
      <div className="student-course-img-box">
        {/* <div>
          {info.pictures.map((picture, index) => (
            <div key={index}>
              {isLoading && <Loading color="#2fb0cd" />}
              <img
                src={picture.image}
                style={{ display: isLoading ? "none" : "block" }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          ))}
        </div> */}
      </div>
      <div className="student-course-info-box">
        <h1>{info.name[language]}</h1>
        <h2>{info.teacher[language]}</h2>
        <h3>{info.desc[language]}</h3>
        <h3>{info.time[language]}</h3>
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
