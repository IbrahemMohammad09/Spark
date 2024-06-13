import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/SharedComponents/HeaderSection/HeaderSection";
import { Container } from "react-bootstrap";
import "./StudentCourses.css";
import StudentCoursesCard from "../../components/StudentCourses/StudentCoursesCard/StudentCoursesCard";
import SEO from "../../components/SharedComponents/SEO/SEO";
import { metaSEO } from "../../utils/constants";

const StudentCourses = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const requestId = parseInt(id, 10);
  const restUrl = "/" + requestId;
  const [isLoading, setIsLoading] = useState(null);

  const getStudentSections = async () => {
    try {
      const res = await Axios.get("rest/sections_list_web/");
      console.log(res);
      const student = res.data?.sections.find((e) => e.pk == requestId);
      if (!student) {
        navigate("/error-page");
      }
    } catch (error) {
      navigate("/error-page");
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
      if(res.data.courses.length == 0) {
        navigate("/coming");
      }
      setStudentCourses(res.data.courses);
    } catch (error) {
      navigate("/error-page");
    }
  };

  useEffect(() => {
    getstudentCoursesData();
  }, []);

  return (
    <section className="overflow-hidden student-courses">
      {studentCourses.length > 0 && <>
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
      </>}
    </section>
  );
};

export default StudentCourses;
