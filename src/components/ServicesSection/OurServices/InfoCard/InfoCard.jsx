import './InfoCard.css'
import MainButton from "../../../SharedComponents/MainButton/MainButton"

const InfoCard = ( { info } ) => {
    return (
        <div className="info-card">
            <div>
                <h1>{info.title}</h1>
                <MainButton title={'View More'} url={info.url} addStyle={'mx-auto mt-3'}/>
            </div>
            <div>
                <img src={info.img} alt={info.img} loading="lazy"/>
            </div>
        </div>
    )
}

export default InfoCard