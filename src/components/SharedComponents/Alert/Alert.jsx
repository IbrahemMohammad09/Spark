import './Alert.css'
import Alert from 'react-bootstrap/Alert';

const AlertMessage = ( { variant, message } ) => {
    /*
        Variant Options:
        - primary
        - secondary
        - success
        - danger
        - warning
        - info
        - light
        - dark
    */
    return (
        <Alert variant={variant} className='alert'>
            { message }
        </Alert>
    )
}

export default AlertMessage