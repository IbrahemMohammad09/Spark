import MainButton from '../../SharedComponents/MainButton/MainButton'
import { BaseURL } from '../../../utils/constants'

import './InfoStudentServiceCard.css'

const InfoStudentServiceCard = ( { info } ) => {
    const handleTitleSplit = (index) => {
        return info.section_name.split(' ')[index];
    }

    return (
        <div className='student-service-section-card fade-in-bottom'>
            <div className='img-cover'>
                <img src={`${BaseURL}/${info.section_image}`} alt={info.section_image} loading='lazy'/>
            </div>
            <div>
                <div>
                    <h1>{handleTitleSplit(0)}</h1>
                    <h2>{handleTitleSplit(1) || 'Engineering'}</h2>
                </div>
                <MainButton title={'See all'} url={info.id} addStyle='student-service-section-card-main-button' />
            </div>
        </div>
    )
}

export default InfoStudentServiceCard