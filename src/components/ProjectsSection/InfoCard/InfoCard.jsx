import MainButton from '../../SharedComponents/MainButton/MainButton'
import './InfoCard.css'

const InfoCard = ( { info } ) => {
    return (
        <div className="project-card">
            <div className='project-card-top'>
                <div>
                    <h1>{info.title}</h1>
                    <h3>{[...info.subtitle].map((e, i) => i <= 60 && e)}</h3>
                    <MainButton title={info.type} addStyle={'project-card-button'}/>
                </div>
                <img src={info.img} alt={info.img}/>
            </div>
            <div className='project-card-bottom'>
                <h1>{info.title}</h1>
                <h3>{info.subtitle}</h3>
            </div>
        </div>
    )
}

export default InfoCard