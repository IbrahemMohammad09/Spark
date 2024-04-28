import MainButton from '../../SharedComponents/MainButton/MainButton'
import './StudentProjectCard.css'

const StudentProjectCard = ( { info } ) => {
    return (
        <div className='student-project-card'>
            <div className='student-project-img-box'>
                <img src={info.imgs[0]} alt={info.imgs[0]} loading='lazy'/>
                <img src={info.imgs[1]} alt={info.imgs[1]} loading='lazy'/>
            </div>
            <div className='student-project-info-box'>
                <h1>{info.title}</h1>
                <h2>{info.subtitle}</h2>
                <h3>{[...info.discreption].map((e, i) => i <= 250 && e)}</h3>
                <MainButton title={'Request Now'} url={`/student-project-request/${info.id}`} addStyle='student-project-card-main-button'/>
            </div>
        </div>
    )
}

export default StudentProjectCard