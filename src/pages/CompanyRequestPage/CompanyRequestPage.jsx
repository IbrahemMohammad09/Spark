import './CompanyRequestPage.css'
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import MainInput from "../../components/SharedComponents/MainInput/MainInput";
import Img from '../../images/CompanyRequestPageImages/company-request-page.png'
import MainButton from '../../components/SharedComponents/MainButton/MainButton';
import TabTitle from '../../utils/TabTitle';

const CompanyRequestPage = () => {

    TabTitle('Spark | service request');

    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [task, setTask] = useState('');
    const [errorRequest, setErrorRequest] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();
    
    const checkFromServiceId = async () => {
        const res = await Axios.get("/rest/service_web/")
        const service = res.data?.services.find(e => e.id == id);

        if (!service) {
            setError(`Service with ID ${id} not found.`);
        }
    };

    useEffect(() => {
        checkFromServiceId();
    }, []);

    const inputs = [
        {
            label: 'Full Name',
            type: 'text',
            name: 'agent_name',
            value: name,
            setValue: setName,
            required: true,
        },
        {
            label: 'Email Address',
            type: 'email',
            name: 'email',
            value: email,
            setValue: setEmail,
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
            label: 'Company Name',
            type: 'text',
            name: 'company_name',
            value: companyName,
            setValue: setCompanyName,
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
            agent_name: name,
            email,
            phone,
            company_name: companyName,
            desc: task,
            service: id
        };

        Axios.post('rest/company_request/', data)
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
        <section className='company-request-page'>
            <div className='cover-img fade-in-bottom'>
                <img src={Img} alt={Img}/>
            </div>
            <div className="main-container">
                {!error && <Container>
                    <form method="POST">
                        {inputs.map((e, i) => <MainInput key={i} label={e.label} required={e.required} setValue={e.setValue} type={e.type} textarea={e.textarea} errorRequest={errorRequest} filed={e.name}/>)}
                        <button onClick={handleSendRequest}>
                            <MainButton title={'Send request'} url={'#'} addStyle='company-request-page-main-button'/>
                        </button>
                    </form>
                </Container>}
            </div>
        </section>
    )
}

export default CompanyRequestPage