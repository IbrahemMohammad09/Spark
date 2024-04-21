import { useLanguageContext } from "../../../hooks/useLanguageContext"
import MainButton from '../../SharedComponents/MainButton/MainButton'
import { BaseURL } from '../../../utils/constants'

import './ServiceCard.css'

const ServiceCard = ( { info } ) => {
    const { language } = useLanguageContext();

    const handleDescriptionSize = (text, size) => {
        let output = "";

        output = [...text].map((e, i) => (i < size)? e: "").join("");

        if(text.length > size) {
            output+='...';
        }

        return output;
    }

    return (
        <div className="company-service-card">
            <div className="img-cover">
                <img src={`${BaseURL}/${info?.service_picture}`} alt={info?.service_picture} loading="lazy"/>
            </div>
            <div className="company-service-card-info">
                <h1>{info?.service_name[language]}</h1>
                <p>{handleDescriptionSize(info?.service_description[language], 400)}</p>
                <MainButton title={'Register now'} url={'/'} addStyle="company-service-card-button"/>
            </div>
            {/* <div>                
                <img src={`${BaseURL}/${info?.service_icon}`} alt={info?.service_icon} loading="lazy"/>
            </div> */}
        </div>
    )
}

export default ServiceCard