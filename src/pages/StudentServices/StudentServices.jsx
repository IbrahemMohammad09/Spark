import "./StudentServices.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import img1 from "../../images/StudentServices/img.jpg";
import TabTitle from "../../utils/TabTitle";
import { useInView } from "react-intersection-observer";
import { useParams, useNavigate } from "react-router-dom";
import { Axios } from "../../api/axios";
import { Loading } from "../../components/Loading/Loading";
const StudentServices = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const requestId = parseInt(id, 10);
  const restUrl = "/" + requestId;
  const [isLoading, setIsLoading] = useState(true);
  const getStudentSections = async () => {
    try {
      const res = await Axios.get("rest/sections_list_web/");
      const student = res.data?.sections.find((e) => e.pk == requestId);
      if (!student) {
        navigate("/error-page");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentSections();
  }, [id]);

  TabTitle("Spark | Student services");
  const studentServices = [
    {
      title: "Students projects",
      img: img1,
      url: "/student-projects",
    },
    {
      title: "Student Courses",
      img: img1,
      url: "/student-courses",
    },
  ];

  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  // Log values to console whenever inView or entry changes
  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);
  return (
    <section id="services" className="student-section main-container">
      <Container className="student-section-grid">
        {studentServices.map((student) => (
          <div
            ref={ref}
            className={`${
              inView ? "fade-in-bottom" : ""
            }  student-section-card bounceInUp`}
          >
            <div className="img-cover">
              {isLoading && <Loading color="#2fb0cd" />}
              <img
                src={student.section_image_web}
                style={{ display: isLoading ? "none" : "block" }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
            <div>
              <h1>{student.section_name}</h1>
              <MainButton
                title={"see more"}
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
