import './MainInput.css'

const MainInput = ( { label, textarea, type, required, placeholder, value, setValue, errorRequest, filed } ) => {
    return (
        <div className="main-input">
            <label>{label}</label>
            {
                textarea?
                    required? <textarea placeholder={placeholder} value={value} name={filed} className={`${errorRequest.hasOwnProperty(filed) && 'error'}`} autoFocus={errorRequest.hasOwnProperty(filed)} onChange={(e) => setValue(() => e.target.value)} required></textarea>
                    : <textarea placeholder={placeholder} value={value} name={filed} className={`${errorRequest.hasOwnProperty(filed) && 'error'}`} autoFocus={errorRequest.hasOwnProperty(filed)} onChange={(e) => setValue(() => e.target.value)}></textarea>
                : required? <input type={type} name={filed} placeholder={placeholder} value={value} className={`${errorRequest.hasOwnProperty(filed) && 'error'}`} autoFocus={errorRequest.hasOwnProperty(filed)} onChange={(e) => setValue(() => e.target.value)} required/>
                    : <input type={type} name={filed} placeholder={placeholder} value={value} className={`${errorRequest.hasOwnProperty(filed) && 'error'}`} autoFocus={errorRequest.hasOwnProperty(filed)} onChange={(e) => setValue(() => e.target.value)}/>
            }
            {errorRequest.hasOwnProperty(filed) && <p className='error_note'>{errorRequest[filed]}</p>}
        </div>
    )
}

export default MainInput