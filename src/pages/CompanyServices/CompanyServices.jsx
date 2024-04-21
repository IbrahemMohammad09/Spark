import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { Axios } from "../../api/axios";

import './CompanyServices.css'
import ServiceCard from "../../components/CompanyServices/ServiceCard/ServiceCard";

const CompanyServices = () => {
    const [services, setServices] = useState([]);

    const getCompanyServicesData = async () => {
        try {
            const res = await Axios.get("rest/service_web/");
            setServices(res.data.services);
            console.log(res.data.services);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCompanyServicesData();
    }, [])
    

    return (
        <div className="company-services main-container">
            <Container>
                <div className="company-services-grid">
                    {services && services.map((e) => <ServiceCard key={e.id} info={e}/>)}
                </div>
            </Container>
        </div>
    )
}

export default CompanyServices