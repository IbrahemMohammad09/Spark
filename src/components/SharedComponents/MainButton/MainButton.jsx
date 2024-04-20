import { Link } from 'react-router-dom'
import './MainButton.css'

const MainButton = ({ url, title, addStyle = '' }) => {
    return (
        <Link to={url} className={`main-button ${addStyle}`}>
            {title}
        </Link>
    )
}

export default MainButton