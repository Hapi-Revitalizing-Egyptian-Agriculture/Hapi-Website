import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from "./AppRouter";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import reportWebVitals from './reportWebVitals';
import en from "./translations/EN/global.json";
import ar from "./translations/AR/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import {BrowserRouter} from 'react-router-dom';
import { HashRouter } from "react-router-dom";
i18next.init({
  interpolation:{escapeValue:false},
  lng:"en",
  resources:{
    en:{
      global:en
    },
    ar:{
      global:ar
    }

  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <I18nextProvider i18n={i18next}>
   <HashRouter base="/">
        <AppRouter />
  </HashRouter>
    </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
