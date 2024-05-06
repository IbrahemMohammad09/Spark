import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import { useInView } from "react-intersection-observer";
import BrushImage from "../../components/SharedComponents/BrushImage/BrushImage";
import "./ComingSoon.css";
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
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="button">Notify Me</button>
      </div>
    </section>
  );
};
