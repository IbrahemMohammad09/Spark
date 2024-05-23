import './StudentCourseRequest.css'
import { Container } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import MainInput from "../../components/SharedComponents/MainInput/MainInput";
import Img from '../../images/CompanyRequestPageImages/company-request-page.webp'
import MainButton from '../../components/SharedComponents/MainButton/MainButton';
import SEO from '../../components/SharedComponents/SEO/SEO';
import generateAlt from '../../utils/GenerateImageAlt';
import { Loading } from '../../components/Loading/Loading';
import AlertMessage from '../../components/SharedComponents/Alert/Alert';

const StudentCourseRequest = () => {
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [task, setTask] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [errorRequest, setErrorRequest] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const navigate = useNavigate();
    
    // const checkFromStudentCourseId = async () => {
    //     const res = await Axios.get("rest/student_courses/"+id)

    //     console.log(res);
    // };

    // useEffect(() => {
    //     checkFromStudentCourseId();
    // }, []);

    const inputs = [
        {
            label: 'Full Name',
            type: 'text',
            name: 'name',
            value: name,
            setValue: setName,
            required: true,
        },
        {
            label: 'Phone',
            type: 'tel',
            value: phone,
            name: 'phone',
            setValue: setPhone,
            required: true,
        },
        {
            label: 'University Name',
            type: 'text',
            value: universityName,
            name: 'university_name',
            setValue: setUniversityName,
            required: true,
        },
        {
            label: 'Tell us about your task',
            value: task,
            name: 'desc',
            setValue: setTask,
            textarea: true,
        },
    ]

    const handleSendRequest = (e) => {
        e.preventDefault();

        let data = {
            name,
            phone,
            desc: task,
            course: +id
        };

        setLoading(true);

        Axios.post('/rest/student_course_request/', data)
        .then(response => {
            if(response.data.message !== 'Request Duplicated') {
                localStorage.setItem('hasCompletedRequest');
                navigate('/completed');
            } else {
                setError('Request Duplicated');
            }
            setLoading(false);
        }).catch(error => {
            if(error.response?.data) {
                setErrorRequest(error.response.data);
                console.log(error.response);
            }
            if(error.response?.data?.message) {
                setError(error.response.data.message);
            }
            setLoading(false);
        });
    }

    return (
        <section className='student-course-request-page'>
            <SEO title={'Spark | Student Course Request'} description={''} name={'Spark'} type={'website'} keywords={["student course request", "student courses", "student course form"]} />
            <div className='course-cover-img fade-in-bottom'>
                <div data-title="Student Course Request">
                    <img src={Img} alt={generateAlt(Img)}/>
                </div>
            </div>
            <div className="main-container">
                {loading && 
                    <div className='center-loading'>
                        <Loading color={'#2FB0CD'}/>
                    </div>
                }
                {!error && <Container>
                    <form method="POST">
                        {inputs.map((e, i) => <MainInput key={i} label={e.label} required={e.required} setValue={e.setValue} type={e.type} textarea={e.textarea} errorRequest={errorRequest} filed={e.name}/>)}
                        <button onClick={handleSendRequest} disabled={loading}>
                            <MainButton title={'Send request'} url={'#'} addStyle='student-course-request-page-main-button'/>
                        </button>
                    </form>
                </Container>}
                {error && <AlertMessage variant={'danger'} message={error}/>}
            </div>
        </section>
    )
}

export default StudentCourseRequest