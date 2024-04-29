import HeaderSection from '../../components/SharedComponents/HeaderSection/HeaderSection'
import './StudentProjects.css'
import { Container } from "react-bootstrap"
import StudentProjectCard from '../../components/StudentProjects/StudentProjectCard/StudentProjectCard'
import TabTitle from '../../utils/TabTitle'
import { Axios } from "../../api/axios";
import { useEffect,useState } from 'react'
import { useParams,useNavigate } from "react-router-dom";


const StudentProjects = () => {
    TabTitle('Spark | student projects');

    const navigate = useNavigate();
    const { id } = useParams();
    const requestId = parseInt(id, 10); 
    const restUrl = "/"+requestId;
  
    const getStudentSections = async () => {
      try {
        const res = await Axios.get("rest/section_list/");
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



    const [studentProjects, setStudentProjects] = useState([]);

    const getstudentProjectsData = async () => {
        try {
        const res = await Axios.get("rest/student_projects/"+restUrl);
        setStudentProjects(res.data.projects);
        console.log(res.data.projects);
        } catch (error) {
        console.log(error);
        }
    };

  useEffect(() => {
    getstudentProjectsData();
  }, []);

    


    return (
        <section className='overflow-hidden'>
            <HeaderSection title={'Student Projects'}/>
            <div className="student-projects main-container">
                <Container className='student-projects-flex bounceInUp'>
                    {studentProjects?.map((e, i) => <StudentProjectCard key={i} info={e}/>)}
                </Container>
            </div>
        </section>
    )
}

export default StudentProjects