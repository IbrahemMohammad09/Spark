import Left from '../../../images/SharedImages/Rectangle 15.svg'
import Right from '../../../images/SharedImages/Rectangle 16.svg'
import generateAlt from '../../../utils/GenerateImageAlt'
import './BrushImage.css'

const BrushImage = ({ type, postion }) => {
    return (
        <div className={`brush-image ${postion}`}>
            <img src={type === 'r'? Right: Left} alt={generateAlt(type === 'r'? Right: Left)} loading='lazy'/>
        </div>
    )
}

export default BrushImage