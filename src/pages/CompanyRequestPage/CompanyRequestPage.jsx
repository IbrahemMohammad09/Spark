import "./CompanyRequestPage.css";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../api/axios";
import { useEffect, useState } from "react";
import MainInput from "../../components/SharedComponents/MainInput/MainInput";


import Img from '../../images/CompanyRequestPageImages/company-request-page.webp'
import MainButton from '../../components/SharedComponents/MainButton/MainButton';
import SEO from '../../components/SharedComponents/SEO/SEO';
import generateAlt from '../../utils/GenerateImageAlt';
import { Loading } from '../../components/Loading/Loading';
import AlertMessage from '../../components/SharedComponents/Alert/Alert';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const CompanyRequestPage = () => {
    const MySwal = withReactContent(Swal);

    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [task, setTask] = useState('');
    const [errorRequest, setErrorRequest] = useState({});
    const [loading, setLoading] = useState(false);


  const { id } = useParams();

  let navigate = useNavigate();

  const checkFromServiceId = async () => {
    setLoading(true);
    const res = await Axios.get("/rest/service_list_web/");
    const service = res.data?.services.find((e) => e.pk == id);
    setLoading(false);
    if (!service) {
      setError(`Service with ID ${id} not found.`);
    }
  };

  useEffect(() => {
    checkFromServiceId();
  }, []);

  const inputs = [
    {
      label: "Full Name",
      type: "text",
      name: "agent_name",
      value: name,
      setValue: setName,
      required: true,
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      value: email,
      setValue: setEmail,
      required: true,
    },
    {
      label: "Phone",
      type: "tel",
      value: phone,
      name: "phone",
      setValue: setPhone,
      required: true,
    },
    {
      label: "Company Name",
      type: "text",
      name: "company_name",
      value: companyName,
      setValue: setCompanyName,
    },
    {
      label: "Tell us about your task",
      value: task,
      name: "desc",
      setValue: setTask,
      textarea: true,
    },
  ];

  const handleSendRequest = (e) => {
    e.preventDefault();

    let data = {
      agent_name: name,
      email,
      phone,
      company_name: companyName,
      desc: task,
      service: +id,
    };

    setLoading(true);


        Axios.post('rest/company_request/', data)
            .then(response => {
                if(response.data.id === 1) {
                    MySwal.fire({
                        title: 'Success!',
                        text: 'Request was successful!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        customClass: {
                            popup: 'custom-popup',
                            title: 'custom-title',
                            content: 'custom-content',
                            confirmButton: 'custom-confirm-button'
                        }
                    });
                    navigate("/company-services");
                } else {
                    setError('The request has already been successfully sent ');
                }
                setLoading(false);
            })
            .catch(error => {
                if(error.response?.data) {
                    setErrorRequest(error.response.data)
                    console.log(error.response.data, errorRequest);
                }
                if(error.response?.data?.message) {
                    setError(error.response.data.message);
                }
                setLoading(false);
            });
    }


  return (
    <section className="company-request-page">
      <SEO
        title={"Spark | Service Request"}
        description={""}
        name={"Spark"}
        type={"website"}
        keywords={[
          "company service request",
          "company services",
          "company service form",
        ]}
      />
      <div className="cover-img fade-in-bottom">
        <div data-title="Project Request">
          <img src={Img} alt={generateAlt(Img)} />
        </div>
      </div>
      <div className="main-container">
        {loading && (
          <div className="center-loading">
            <Loading color={"#2FB0CD"} />
          </div>
        )}
        {!error && (
          <Container>
            <form method="POST">
              {inputs.map((e, i) => (
                <MainInput
                  key={i}
                  label={e.label}
                  required={e.required}
                  setValue={e.setValue}
                  type={e.type}
                  textarea={e.textarea}
                  errorRequest={errorRequest}
                  filed={e.name}
                />
              ))}
              <button onClick={handleSendRequest} disabled={loading}>
                <MainButton
                  title={"Send request"}
                  url={"#"}
                  addStyle="company-request-page-main-button"
                />
              </button>
            </form>
          </Container>
        )}
        {error && <AlertMessage variant={"danger"} message={error} />}
      </div>
    </section>
  );
};

export default CompanyRequestPage;
