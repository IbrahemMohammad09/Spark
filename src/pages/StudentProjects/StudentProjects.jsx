import HeaderSection from "../../components/SharedComponents/HeaderSection/HeaderSection";
import "./StudentProjects.css";
import { Container } from "react-bootstrap";
import StudentProjectCard from "../../components/StudentProjects/StudentProjectCard/StudentProjectCard";
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from "../../components/SharedComponents/SEO/SEO";
import img from "../../images/StudentServices/d.jpg";

const StudentProjects = () => {
  // const services =[
  //   {
  //     pk:1,
  //     project_name:"IT",
  //     project_field:"It ",
  //     project_desc:"this the best project ever",
  //     pictures: img ,
  //   },{
  //     pk:1,
  //     project_name:"IT",
  //     project_field:"It ",
  //     project_desc:"this the best project ever",
  //     pictures: img ,
  //   },{
  //     pk:1,
  //     project_name:"IT",
  //     project_field:"It ",
  //     project_desc:"this the best project ever",
  //     pictures: img ,
  //   }
  // ]

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

  const [studentProjects, setStudentProjects] = useState([]);

  const getstudentProjectsData = async () => {
    setIsLoading(false);
    try {
      const res = await Axios.get("rest/student_projects/" + restUrl);
      setIsLoading(false);
      setStudentProjects(res.data.projects);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getstudentProjectsData();
  }, []);

  return (
    <section className="overflow-hidden">
      <SEO
        title={"Spark | Student projects"}
        description={""}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software develpoment",
          "software engineer",
          "student services",
        ]}
      />
      <HeaderSection title={"Student Projects"} />
      <div className="student-projects main-container">
        <Container className="student-projects-flex bounceInUp">
          {studentProjects?.map((e, i) => (
            <StudentProjectCard key={i} info={e} isLoading={isLoading} />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default StudentProjects;
