import MainButton from "../../SharedComponents/MainButton/MainButton";
import "./InfoCard.css";
import { Loading } from "../../Loading/Loading";
import generateAlt from "../../../utils/GenerateImageAlt";

const InfoCard = ({ info, isLoading }) => {
  return (
    <div className="project-card">
      <div className="project-card-top">
        <div>
          <h1>{info.project_name.EN}</h1>
          <h3>{[...info.project_field.EN].map((e, i) => i <= 60 && e)}</h3>
          <MainButton title="see project" url={'/view-project/'+info.pk} addStyle={"project-card-button"} />
        </div>
        {isLoading && <Loading color="#2fb0cd" />}
        <img
          src={`${info?.first_image}`}
          alt={generateAlt(info.first_image)}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
      <div className="project-card-bottom">
        <h1>{info.project_name.EN}</h1>
        <h3>{info.project_desc.EN}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
