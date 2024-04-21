import {createContext, useReducer} from "react";

export const LanguageContext = createContext();

const LanguageReducer = (state, action) => {
    switch(action.type) {
        case "AR": 
            localStorage.setItem('language', 'AR');
            return {
                language: action.payload
            };
        case "EN":
            localStorage.removeItem('language', 'EN');
            return {
                language: action.payload
            };
        default: 
            localStorage.removeItem('language', 'EN');
            return {
                language: action.payload
            };
    }
}

export const LanguageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LanguageReducer, {
        language: localStorage.getItem('language')? localStorage.getItem(''): 'EN'
    })

    return (
        <LanguageContext.Provider value={{...state, dispatch}}>
            { children }
        </LanguageContext.Provider>
    );
}