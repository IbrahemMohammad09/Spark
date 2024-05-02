import MainButton from '../../SharedComponents/MainButton/MainButton'
import './StudentCoursesCard.css'
import { useLanguageContext } from "../../../hooks/useLanguageContext";

const StudentCoursesCard = ( { info } ) => {
    const { language } = useLanguageContext();

    return (
        <div className='student-course-card'>
            <div className='student-course-img-box'>
                    <div>
                        {info.pictures.map((picture, index) => (
                            <img key={index} src={picture.image} alt={picture.image} />
                        ))}
                    </div>
            </div>
            <div className='student-course-info-box'>
                <h1>{info.project_name[language]}</h1>
                <h2>{info.project_field[language]}</h2>
                <h3>{info.project_desc[language]}</h3>
                <MainButton title={'Request Now'} url={`/student-course-request/${info.pk}`} addStyle='student-course-card-main-button'/>
            </div>
        </div>
    )
}

export default StudentCoursesCard


