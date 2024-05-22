import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import { useInView } from "react-intersection-observer";
import "./ViewProject.css";
export const ViewProject = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div>
      <div className="shadow"></div>

      {/* <div className="info-box active">
        <h1>Drop-in audio chat</h1>
      </div> */}
      <div
        ref={ref}
        className={`info-box active ${inView ? "fade-in-bottom" : ""} `}
      >
        <h1>Drop-in audio chat</h1>
        <h2>
          Spark is a software engineering company that specializes in developing
          cutting-edge solutions for various domains. We have a team of talented
          and passionate engineers who are always ready to take on new
          challenges and deliver high-quality products.
        </h2>
        <div className="visit-button">
          <MainButton
            url={"https://MRR.com"}
            title={"visit project"}
            addStyle={"projects-button-see-all"}
          />
        </div>
      </div>
    </div>
  );
};
