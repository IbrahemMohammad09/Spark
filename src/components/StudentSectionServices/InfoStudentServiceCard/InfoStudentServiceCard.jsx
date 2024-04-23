import MainButton from '../../SharedComponents/MainButton/MainButton'

import './InfoStudentServiceCard.css'

const InfoStudentServiceCard = ( { info } ) => {
    const handleTitleSplit = (index) => {
        return info.title.split(' ')[index];
    }

    return (
        <div className='student-service-section-card fade-in-bottom'>
            <div className='img-cover'>
                <img src={info.img} alt={info.img} loading='lazy'/>
            </div>
            <div>
                <div>
                    <h1>{handleTitleSplit(0)}</h1>
                    <h2>{handleTitleSplit(1)}</h2>
                </div>
                <MainButton title={'See all'} url={info.url} addStyle='student-service-section-card-main-button' />
            </div>
        </div>
    )
}

export default InfoStudentServiceCard