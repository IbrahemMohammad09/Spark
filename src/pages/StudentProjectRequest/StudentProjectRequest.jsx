import './StudentProjectRequest.css'
import { Container } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import MainInput from "../../components/SharedComponents/MainInput/MainInput";
import Img from '../../images/CompanyRequestPageImages/company-request-page.webp'
import MainButton from '../../components/SharedComponents/MainButton/MainButton';
import SEO from '../../components/SharedComponents/SEO/SEO';

const StudentProjectRequest = () => {
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [task, setTask] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [errorRequest, setErrorRequest] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();
    
    let { pathname } = useLocation();
    
    // useEffect(() => {
    //     if (!localStorage.getItem('hasCompletedRequest')) {
    //         navigate('/error-page');
    //     }
    //     localStorage.removeItem('hasCompletedRequest');
    // }, [pathname]);
    // const checkFromStudentProjectId = async () => {
    //     const res = await Axios.post("//")

    //     console.log(res);
    // };

    // useEffect(() => {
    //     checkFromStudentProjectId();
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
            university_name: universityName,
            project: id
        };

        Axios.post('/rest/student_project_request/', data)
            .then(response => {
                navigate('/completed');
            })
            .catch(error => {
                // console.log(error.response.data);
                setErrorRequest(error.response.data)
            });
    }

    return (
        <section className='student-project-request-page'>
            <SEO title={'Spark | Student Project Request'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
            <div className='cover-img fade-in-bottom'>
                <div data-title="Student Project Request">
                    <img src={Img} alt={Img}/>
                </div>
            </div>
            <div className="main-container">
                {!error && <Container>
                    <form method="POST">
                        {inputs.map((e, i) => <MainInput key={i} label={e.label} required={e.required} setValue={e.setValue} type={e.type} textarea={e.textarea} errorRequest={errorRequest} filed={e.name}/>)}
                        <button onClick={handleSendRequest}>
                            <MainButton title={'Send request'} url={'#'} addStyle='student-project-request-page-main-button'/>
                        </button>
                    </form>
                </Container>}
            </div>
        </section>
    )
}

export default StudentProjectRequest