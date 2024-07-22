import { useInView } from "react-intersection-observer";
import BrushImage from "../../components/SharedComponents/BrushImage/BrushImage";
import coming from "../../images/ComingSoon/coming.svg";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import "./ComingSoon.css";
import generateAlt from "../../utils/GenerateImageAlt";
export const ComingSoon = () => {
  const { inView, ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="containerComing">
      <BrushImage key={0} type={"l"} postion={"brush1"} />
      <BrushImage key={1} type={"r"} postion={"brush2"} />
      <div
        className={`${inView ? "fade-in-bottom" : ""} clock_content`}
        ref={ref}
      >
        <h1>We are almost there</h1>
        <h3>Stay tuned for something amazing.</h3>
        <div className="dynamic-background">

          <img
            src={coming}
            alt={generateAlt(coming)}
            style={{ width: "400px", height: "400px" }}
          />

        </div>
        <MainButton title={"Go To Home"} addStyle={"text-white"} url={"/"} />
      </div>
    </section>
  );
};
