import { Link } from "react-router-dom";
import "./OurProjectCard.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import generateAlt from "../../../utils/GenerateImageAlt";

const OurProjectCard = ({ info }) => {
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const initScrollY = useRef(window.scrollY);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY !== initScrollY.current) {
        setUserHasScrolled(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (inView && userHasScrolled) {
      setHasBeenInView(true);
    }
  }, [inView, userHasScrolled]);
  
  return (
    <div
      className={`${
        hasBeenInView && inView ? "fade-in-bottom" : ""
      } our-project-card-info`}
      ref={ref}
    >
      <div className="img">
        <img src={info.img} alt={generateAlt(info.img)} loading="lazy" />
      </div>
      <div className="info">
        <h1>{info.title}</h1>
        <h2>{info.type}</h2>
        <h3>{info.subtitle}</h3>
        <a href={info.url} className="url">
          {info.url}
        </a>
        <Link to={"/view-project/" + info.id} className="link">
          Visit
        </Link>
      </div>
    </div>
  );
};

export default OurProjectCard;
