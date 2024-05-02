import { Link } from 'react-router-dom'
import './OurProjectCard.css'

const OurProjectCard = ( { info } ) => {
    return (
        <div className="our-project-card-info">
            <div className='img'>
                <img src={info.img} alt={info.img} loading='lazy'/>
            </div>
            <div className='info'>
                <h1>{info.title}</h1>
                <h2>{info.type}</h2>
                <h3>{info.subtitle}</h3>
                <a href={info.url} className='url'>{info.url}</a>
                <Link to={info.link} className='link'>Visit</Link>
            </div>
        </div>
    )
}

export default OurProjectCard