import { useLocation, useNavigate } from "react-router-dom"
import MainButton from "../../components/SharedComponents/MainButton/MainButton"
import Img from '../../images/CompletePage/Successmark.svg'
import './CompleteRequest.css'
import { useEffect } from "react"
import SEO from "../../components/SharedComponents/SEO/SEO"
import generateAlt from "../../utils/GenerateImageAlt"

const CompleteRequest = () => {
    let { pathname } = useLocation();
    
    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('hasCompletedRequest')) {
            navigate('/error-page');
        }
        localStorage.removeItem('hasCompletedRequest');
    }, [pathname]);

    return (
        <section className="complete-page main-container zoomIn">
            <SEO title={'Spark | your request is complete'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
            <img src={Img} alt={generateAlt(Img)}/>
            <h1>Request Completed</h1>
            <MainButton title={'Back to Home'} url={'/'} addStyle="text-white"/>
        </section>
    )
}

export default CompleteRequest