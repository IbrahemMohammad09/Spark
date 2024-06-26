import Img1 from '../../../images/SharedImages/Group 34389.webp'
import generateAlt from '../../../utils/GenerateImageAlt'
import './HeaderSection.css'

const HeaderSection = ( { title } ) => {
    return (
        <div className='header-section position-relative'>
            <div className='bg-header-section'></div>
            <img src={Img1} alt={generateAlt(Img1)} className='logo-header-section rotate' loading='lazy' />
            <div className='title-header-section'>{title}</div>
        </div>
    )
}

export default HeaderSection