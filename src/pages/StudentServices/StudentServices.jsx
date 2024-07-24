import "./StudentServices.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import img1 from "../../images/StudentServices/courses_services.webp";
import img2 from "../../images/StudentServices/project_services.webp";
import { useInView } from "react-intersection-observer";
import { useParams, useNavigate } from "react-router-dom";
import { Axios } from "../../api/axios";
import { Loading } from "../../components/Loading/Loading";
import SEO from "../../components/SharedComponents/SEO/SEO";
import generateAlt from "../../utils/GenerateImageAlt";
import { metaSEO } from "../../utils/constants";

const StudentServices = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const requestId = parseInt(id, 10);
  const restUrl = "/" + requestId;
  const [isLoading, setIsLoading] = useState(true);

  const getStudentSections = async () => {
    setIsLoading(true)
    try {
      const res = await Axios.get("rest/sections_list_web/");
      const student = res.data?.sections.find((e) => e.pk == requestId);
      setIsLoading(false)
      if (!student) {
        navigate("/error-page");
      }
    } catch (error) {

    }
  };

  useEffect(() => {
    getStudentSections();
  }, [id]);

  const studentServices = [
    {
      title: "Students projects",
      img: img2,
      url: "/student-projects",
    },
    {
      title: "Student Courses",
      img: img1,
      url: "/student-courses",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  return (
    <section id="services" className="student-section main-container">
      <SEO
        title={"Spark | Student services"}
        description={metaSEO.studentServices.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "IT services",
          "Marketing services",
          "Graphic services",
        ]}
      />
        <div className="center-loading">
          {isLoading && <Loading color="#2fb0cd" />}
        </div>
      <Container className="student-section-grid">
        {!isLoading && studentServices.map((student, index) => (
          <div
            ref={ref}
            className={`${
              inView ? "fade-in-bottom" : ""
            }  student-section-card`}
            key={index}
          >
            <div className="img-cover">
              {isLoading && <Loading color="#2fb0cd" />}
              <img
                src={student.img}
                alt={generateAlt(student.img)}
                style={{ display: isLoading ? "none" : "block" }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
            <div>
              <h1>{student.title}</h1>
              <MainButton
                title={"See more"}
                url={student.url + restUrl}
                addStyle="student-card-main-button"
              />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default StudentServices;
