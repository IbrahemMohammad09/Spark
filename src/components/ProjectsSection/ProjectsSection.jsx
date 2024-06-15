import MainButton from "../SharedComponents/MainButton/MainButton";
import MainHomeTitle from "../SharedComponents/MainHomeTitle/MainHomeTitle";
import Img1 from "../../images/OurProjectsImage/UI Design.webp";
import Img2 from "../../images/OurProjectsImage/Home Page 9.webp";
import InfoCard from "./InfoCard/InfoCard";
import "./ProjectsSection.css";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import SEO from "../SharedComponents/SEO/SEO";
import { useEffect, useState } from "react";
import { metaSEO } from "../../utils/constants";
import { Axios } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";

const ProjectsSection = () => {
  const [allProjects, setAllProjects] = useState();
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const getProjects = async () => {
    setIsLoading(true);
    try {
        const res = await Axios.get("rest/our_projects_list/");
        if (res.data && Array.isArray(res.data)) {
            const firstTwoProjects = res.data.slice(0, 2);
            setProjects(firstTwoProjects);
            setIsLoading(false);
        } else {
            navigate('/error');
        }
    } catch (error) {
        navigate('/error');
    }
};


  useEffect(() => {
    getProjects();
  }, []);

  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleUserScroll = () => {
    setUserHasScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleUserScroll);

    return () => {
      window.removeEventListener("scroll", handleUserScroll);
    };
  }, []);

  useEffect(() => {
    if (inView && userHasScrolled) {
      setHasBeenInView(true);
    }
  }, [inView, userHasScrolled]);

  return (
    <section id="our-projects">
      <SEO
        title={"Spark | Our projects"}
        description={metaSEO.projects.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software projects",
          "mobile projects",
          "student projects",
        ]}
      />
      <Container className="main-section our-projects position-relative">
        <MainHomeTitle
          title={"Our Projects"}
          subtitle={metaSEO.projects.description}
        />
        <div>
          <div
            ref={ref}
            className={`${
              hasBeenInView ? "fade-in-bottom" : ""
            } our-projects-cards`}
          >
            {isLoading && <div className="center-loading"><Loading color={'#2fb0cd'}/></div>}
            {projects && projects?.map((e, i) => (
              <InfoCard key={i} info={e} isLoading={isLoading} />
            ))}
          </div>
          <MainButton
            url={"/our-projects/"}
            title={"See all"}
            addStyle={"projects-button-see-all"}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
