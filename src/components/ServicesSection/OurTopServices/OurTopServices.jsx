import MainHomeTitle from "../../SharedComponents/MainHomeTitle/MainHomeTitle"
import InfoCard from "./InfoCard/InfoCard"
import Icon1 from '../../../images/ServicesSectionImages/Frame 1597884162.svg'
import Icon2 from '../../../images/ServicesSectionImages/Frame 1597884163.svg'
import Icon3 from '../../../images/ServicesSectionImages/Frame 1597884164.svg'
import Icon4 from '../../../images/ServicesSectionImages/Frame 1597884165.svg'
import './OurTopServices.css'

const OurTopServices = () => {
    const topServices = [
        {
            title: 'Web Development',
            url: '/',
            subtitle: 'Developing websites using the latest technologies with continuous and permanent technical support',
            icon: Icon1
        },
        {
            title: 'UI/UX Desigen',
            url: '/',
            subtitle: 'design user interfaces to give him a wider and easier experience in dealing with applications.',
            icon: Icon2
        },
        {
            title: 'Branding',
            url: '/',
            subtitle: 'Visual identity design including all elements of logo, colors and fonts',
            icon: Icon3
        },
        {
            title: 'E-Marketing',
            url: '/',
            subtitle: 'E-marketing and management of social media platforms.',
            icon: Icon4
        },
    ];

    return (
        <div className="top-services position-relative z-1">
            <MainHomeTitle title={'Our Top Services'} subtitle={'We are committed to providing advanced and innovative technological services that meet customer needs and exceed their expectations, focusing on quality, innovation and efficiency.'}/>
            <div className="top-services-cards">
                {topServices.map((e, i) => <InfoCard key={i} info={e}/>)}
            </div>
        </div>
    )
}

export default OurTopServices