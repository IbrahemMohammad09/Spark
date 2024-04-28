import './StudentProjectRequest.css'
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import MainInput from "../../components/SharedComponents/MainInput/MainInput";
import Img from '../../images/CompanyRequestPageImages/company-request-page.png'
import MainButton from '../../components/SharedComponents/MainButton/MainButton';
import TabTitle from '../../utils/TabTitle';

const StudentProjectRequest = () => {

    TabTitle('Spark | student request');

    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [task, setTask] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [errorRequest, setErrorRequest] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();
    
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
                console.log(response.data);
                navigate('/completed');
            })
            .catch(error => {
                console.log(error.response.data);
                setErrorRequest(error.response.data)
            });
    }

    return (
        <section className='student-project-request-page'>
            <div className='cover-img fade-in-bottom'>
                <img src={Img} alt={Img}/>
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