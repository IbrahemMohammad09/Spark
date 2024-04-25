import './MainInput.css'

const MainInput = ( { label, textarea, type, required, placeholder, value, setValue } ) => {
    return (
        <div className="main-input">
            <label>{label}</label>
            {
                textarea?
                    required? <textarea placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} required></textarea>
                    : <textarea placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}></textarea>
                : required? <input type={type} name={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} required/>
                    : <input type={type} name={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
            }
        </div>
    )
}

export default MainInput