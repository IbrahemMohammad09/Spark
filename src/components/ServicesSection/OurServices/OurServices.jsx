import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle"
import './OurServices.css'

import Img1 from './../../../images/ServicesSectionImages/student_services-removebg 1 (1).png'
import Img2 from './../../../images/ServicesSectionImages/student_services-removebg 1.png'
import InfoCard from "./InfoCard/InfoCard"

const OurServices = () => {
    const services = [
        {
            title: 'Company Services',
            url: '/',
            img: Img1
        },
        {
            title: 'Student Services',
            url: '/',
            img: Img2
        },
    ];

    return (
        <div className="main-section our-services">
            <MainHomeTitle title={'Our Services'}/>
            <div className="wallpaper position-relative z-1"/>
            <div className="services-cards d-flex justify-content-between flex-wrap align-items-center position-relative z-1">
                {services.map((e, i) => <InfoCard key={i} info={e}/>)}
            </div>
        </div>
    )
}

export default OurServices