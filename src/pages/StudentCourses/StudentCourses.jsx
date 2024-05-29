import { useNavigate, useParams } from "react-router-dom";
import TabTitle from "../../utils/TabTitle";
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/SharedComponents/HeaderSection/HeaderSection";
import { Container } from "react-bootstrap";
import "./StudentCourses.css";
import StudentCoursesCard from "../../components/StudentCourses/StudentCoursesCard/StudentCoursesCard";
import SEO from "../../components/SharedComponents/SEO/SEO";
import { metaSEO } from "../../utils/constants";
import img1 from "../../images/StudentServices/a.jpg";
import img2 from "../../images/StudentServices/b.jpg";
import img3 from "../../images/StudentServices/c.jpg";

const StudentCourses = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const requestId = parseInt(id, 10);
  const restUrl = "/" + requestId;
  const [isLoading, setIsLoading] = useState(null);

  const getStudentSections = async () => {
    try {
      const res = await Axios.get("rest/sections_list_web/");
      const student = res.data?.sections.find((e) => e.pk == requestId);
      if (!student) {
        navigate("/error-page");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getStudentSections();
  }, [id]);

  const [studentCourses, setStudentCourses] = useState([]);

  const getstudentCoursesData = async () => {
    setIsLoading(true);
    try {
      const res = await Axios.get("rest/student_courses/" + restUrl);
      setIsLoading(false);
      setStudentCourses(res.data.courses);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getstudentCoursesData();
  }, []);
  // const studentCourses = [
  //   {
  //     pictures: [img1, img2, img3],
  //     project_name: {
  //       en: "Web Development Course",
  //       fr: "Cours de développement web",
  //       es: "Curso de desarrollo web",
  //     },
  //     project_field: {
  //       en: "Technology",
  //       fr: "Technologie",
  //       es: "Tecnología",
  //     },
  //     project_desc: {
  //       en: "Learn how to build modern web applications using the latest technologies.",
  //       fr: "Apprenez à construire des applications web modernes en utilisant les dernières technologies.",
  //       es: "Aprende a construir aplicaciones web modernas utilizando las últimas tecnologías.",
  //     },
  //   },
  // ];
  return (
    <section className="overflow-hidden">
      <SEO
        title={"Spark | Student courses"}
        description={metaSEO.studentCourses.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software develpoment",
          "software engineer",
          "student services",
        ]}
      />
      <HeaderSection title={"Student Courses"} />
      <div className="student-courses main-container">
        <Container className="student-courses-flex bounceInUp">
          {studentCourses.map((e, i) => (
            <StudentCoursesCard key={i} info={e} isLoading={isLoading} />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default StudentCourses;
