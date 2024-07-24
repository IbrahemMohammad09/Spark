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
    <div className="our-project-card-info">
      <div className="img">
        <img src={info.first_image} alt={generateAlt(info.first_image)} loading="lazy" />
      </div>
      <div className="info">
        <h1>{info.project_name["EN"]}</h1>
        <h2>{info.project_field["EN"]}</h2>
        <h3>{info.project_desc["EN"]}</h3>
        <Link to={"/view-project/"+info.pk} className="link">
          Visit
        </Link>
      </div>
    </div>
  );
};

export default OurProjectCard;
