import "./StudentServices.css";
import { Container } from "react-bootstrap";
import InfoStudentServiceCard from "../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard";
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import img1 from "../../images/StudentServices/img.jpg";
import TabTitle from "../../utils/TabTitle";
import { useInView } from "react-intersection-observer";
const StudentServices = () => {
  TabTitle("Spark | Student services");
  const studentServices = [
    {
      title: "Students projects",
      img: img1,
      url: "/students-projects",
    },
    {
      title: "Student Courses",
      img: img1,
      url: "/students-courses",
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
              <img src={student.img} />
            </div>
            <div>
              <h1>{student.title}</h1>
              <MainButton
                title={"see more"}
                url={student.url}
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
