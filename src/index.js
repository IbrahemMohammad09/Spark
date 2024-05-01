import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageContextProvider } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));

const helmetContext = {};

root.render(
  <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
