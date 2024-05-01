import { useNavigate, useParams } from "react-router-dom";
import TabTitle from "../../utils/TabTitle";
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/SharedComponents/HeaderSection/HeaderSection";
import { Container } from "react-bootstrap";
import './StudentCourses.css'
import StudentCoursesCard from "../../components/StudentCourses/StudentCoursesCard/StudentCoursesCard";

const StudentCourses = () => {
    TabTitle('Spark | student courses');

    const navigate = useNavigate();
    const { id } = useParams();
    const requestId = parseInt(id, 10); 
    const restUrl = "/"+requestId;

    const getStudentSections = async () => {
        try {
            const res = await Axios.get("rest/student_courses/");
            const student = res.data?.sections.find((e) => e.id == requestId);
            if(!student){
                navigate('/error-page');
            } 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStudentSections();
    }, [id]);

    const [studentCourses, setStudentCourses] = useState([]);

    const getstudentCoursesData = async () => {
        try {
            const res = await Axios.get("rest/student_courses/"+restUrl);
            setStudentCourses(res.data.projects);
            console.log(res.data.projects);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getstudentCoursesData();
    }, []);

    return (
        <section className='overflow-hidden'>
            <HeaderSection title={'Student Courses'}/>
            <div className="student-courses main-container">
                <Container className='student-courses-flex bounceInUp'>
                    {studentCourses?.map((e, i) => <StudentCoursesCard key={i} info={e}/>)}
                </Container>
            </div>
        </section>
    )
}

export default StudentCourses