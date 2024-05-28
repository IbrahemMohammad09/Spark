import './ErrorPage.css';
import MainButton from '../../components/SharedComponents/MainButton/MainButton'
import SEO from '../../components/SharedComponents/SEO/SEO';

const ErrorPage = () => {
    localStorage.removeItem('hasCompletedRequest');
    const hasCompletedRequest ="hasCompletedRequest"
    if(localStorage.getItem(hasCompletedRequest)){console.log("yes")}
    for (let i = 0; i < localStorage.length; i++) {
        // استرجاع اسم المفتاح
        const key = localStorage.key(i);
        // استرجاع القيمة المرتبطة بالمفتاح
        const value = localStorage.getItem(key);
        // طباعة اسم المفتاح وقيمته 
        console.log(`Key: ${key}, Value: ${value}`);
      }
    return (
        <div className="error-page zoomIn">
            <SEO title={'Spark | 404'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
            <h1 className='fill-text' data-text="Oops!">Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <MainButton title={'Try Again'} url={'../'} addStyle='error-page-main-button' />
        </div>
    )
}

export default ErrorPage