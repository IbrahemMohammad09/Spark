import './ErrorPage.css';
import MainButton from '../../components/SharedComponents/MainButton/MainButton'
import SEO from '../../components/SharedComponents/SEO/SEO';

const ErrorPage = () => {
    return (
        <div className="error-page zoomIn">
            <SEO title={'Spark | 404'} description={''} name={'Spark'} type={'website'} keywords={["page not found", "error in connection", "error, sorry"]} />
            <h1 className='fill-text' data-text="Oops!">Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <MainButton title={'Go To Home'} url={'/'} addStyle='error-page-main-button' />
        </div>
    )
}

export default ErrorPage