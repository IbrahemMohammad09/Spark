import './ErrorPage.css';
import MainButton from '../../components/SharedComponents/MainButton/MainButton'
import TabTitle from '../../utils/TabTitle'

const ErrorPage = () => {
    TabTitle('Spark - 404');

    return (
        <div className="error-page zoomIn">
            <h1 className='fill-text' data-text="Oops!">Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <MainButton title={'Try Again'} url={'../'} addStyle='error-page-main-button' />
        </div>
    )
}

export default ErrorPage