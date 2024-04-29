import MainButton from '../../SharedComponents/MainButton/MainButton'
import './StudentProjectCard.css'
import { useLanguageContext } from "../../../hooks/useLanguageContext";

const StudentProjectCard = ( { info } ) => {
    const { language } = useLanguageContext();

    return (
        <div className='student-project-card'>
            <div className='student-project-img-box'>
                    <div>
                        {info.pictures.map((picture, index) => (
                            <img key={index} src={picture.image}  />
                        ))}
                    </div>
            </div>
            <div className='student-project-info-box'>
                <h1>{info.project_name[language]}</h1>
                <h2>{info.project_field[language]}</h2>
                <h3>{info.project_desc[language]}</h3>
                <MainButton title={'Request Now'} url={`/student-project-request/${info.pk}`} addStyle='student-project-card-main-button'/>
            </div>
        </div>
    )
}

export default StudentProjectCard