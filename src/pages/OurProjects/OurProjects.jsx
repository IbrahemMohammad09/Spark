import SEO from "../../components/SharedComponents/SEO/SEO";
import "./OurProjects.css";
import Img1 from "../../images/OurProjectsImages/Bill Sitting using laptop 1.webp";
import Img2 from "../../images/OurProjectsImages/Frame 1597884239.webp";
import OurProjectCard from "../../components/OurProjects/OurProjectCard/OurProjectCard";
import "../../animation.css";
import generateAlt from "../../utils/GenerateImageAlt";
import { metaSEO } from "../../utils/constants";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isAll, setIsAll] = useState(false);

  useEffect(() => {
    setIsAll(false);
  }, []);

  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const initScrollY = useRef(window.scrollY);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedProjects, setDisplayedProjects] = useState([]);

  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth !== windowWidth) {
      setWindowWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    let isMounted = true; // علامة لتتبع حالة mount/unmount

    const updateDisplayedProjects = () => {
      // تأكد من أن العنصر لا يزال محملاً قبل التحديث
      if (isMounted) {
        if (windowWidth <= 640) {
          setDisplayedProjects(projects.slice(0, 2));
        } else if (windowWidth > 640 && windowWidth <= 1740) {
          setDisplayedProjects(projects.slice(0, 4));
        } else if (windowWidth > 1740) {
          setDisplayedProjects(projects.slice(0, 6));
        }
      }
    };

    updateDisplayedProjects();

    // عند الـ unmounting، يقوم بتغيير isMounted إلى false
    return () => {
      isMounted = false;
    };
  }, [windowWidth]);

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

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://sparkeng.pythonanywhere.com/rest/our_projects_list/')
      .then(res => {
        if(res.data) {
          setIsLoading(false)
          setProjects(res.data)
        } else {
          setIsLoading(false)
          navigate('/error');
        }
      })
      .catch( err => {
        setIsLoading(false)
        navigate('/error');
      });
  }, []);

  return (
    <section id="our-projects" className="our-projects-page position-relative">
      <SEO
        title={"Spark | Our projects"}
        description={metaSEO.ourProjects.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software projects",
          "engineer projects",
          "student projects",
        ]}
      />

      <div className="top-section">
        <div className="design-box">
          <img src={Img1} alt={generateAlt(Img1)} loading="lazy" />
          <img src={Img2} alt={generateAlt(Img2)} loading="lazy" />
        </div>
        <h1 className="title-text">{metaSEO.ourProjects.description}</h1>
      </div>
        {isLoading && <div className="center-loading"><Loading color={'#2fb0cd'}/></div>}
        {projects && 
          <div className="our-projects-cards main-container bounceInUp">
                <h2 className="title">Our Projects</h2>
                <div ref={ref} className={`${hasBeenInView ? "fade-in-bottom" : ""}`}>
                  {isAll === true && (
                    <div className="our-projects-grid">
                      {projects.map((e, i) => (
                        <OurProjectCard key={i} info={e} />
                      ))}
                    </div>
                  )}
                  {isAll === false && (
                    <div className="our-projects-grid large">
                      {projects.map((e, i) => (
                        i <= 3 &&
                        <OurProjectCard key={i} info={e} />
                      ))}
                    </div>
                  )}
                </div>

                {!isAll && (
                  <div className="button-all" onClick={() => setIsAll(true)}>
                    <MainButton title={"See all"} addStyle={"see-all"} />
                  </div>
                )}
          </div>
        }
    </section>
  );
};

export default OurProjects;
