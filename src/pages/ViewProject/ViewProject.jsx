import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import { useInView } from "react-intersection-observer";
import image1 from "../../images/ViewProjectImages/Blue Caves - Zante, Greece.jpeg";
import image2 from "../../images/ViewProjectImages/Mykonos.jpeg";
import { BiArrowBack } from "react-icons/bi";

import "./ViewProject.css";
export const ViewProject = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="theContain">
      <div onClick={() => window.history.back()} className="back-button">
        <BiArrowBack />
      </div>
      <div className="viewContainer">
        <img src={image1} alt="image1" className="back-image" />
        <div className="shadow"></div>
        {/* <div className="info-box active">
        <h1>Drop-in audio chat</h1>
      </div> */}
        <div className={`right-image ${inView ? "fade-in-bottom" : ""}`}>
          <img src={image2} alt="" />
        </div>

        <div
          ref={ref}
          className={`info-box active ${inView ? "fade-in-bottom" : ""} `}
        >
          <h1>Drop-in audio chat</h1>
          <h2>
            Spark is a software engineering company that specializes in
            developing cutting-edge solutions for various domains. We have a
            team of talented and passionate engineers who are always ready to
            take on new challenges and deliver high-quality products.
          </h2>
          <div className="buttons">
            <div className="visit-button">
              <MainButton
                url={"https://MRR.com"}
                title={"visit project"}
                addStyle={"projects-button-see-all"}
              />
            </div>
            <div className="visit-button">
              <MainButton
                url={"/view-project/1"}
                title={"See Project Photo"}
                addStyle={"projects-button-see-all"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
