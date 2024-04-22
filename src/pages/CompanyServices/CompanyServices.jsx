import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { Axios } from "../../api/axios";

import './CompanyServices.css'
import ServiceCard from "../../components/CompanyServices/ServiceCard/ServiceCard";
// import BrushImage from "../../components/SharedComponents/BrushImage/BrushImage";

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
        <div className="company-services position-relative">
            <div className="main-container">
                <Container>
                    <div className="company-services-grid">
                        {services && services.map((e) => <ServiceCard key={e.id} info={e}/>)}
                    </div>
                </Container>
            </div>
            {/* <BrushImage key={3} type={"r"} postion={"brush4"} />
            <BrushImage key={4} type={"l"} postion={"brush5"} /> */}
        </div>
    )
}

export default CompanyServices