import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios'
// import {  ThemeProvider} from '@mui/material/styles';
// import BaseTheme from './theme/BaseTheme';


// style + assets
import './assets/scss/style.scss';
import config from './config';

axios.defaults.baseURL = "http://blinkitssmart.store:5000/api";
axios.defaults.headers.post['Content-Type'] = 'application/json'; 
axios.defaults.headers.post['Access-Control-Allow-Origin']='*';

// for POST requests
// http://ec2-43-204-220-93.ap-south-1.compute.amazonaws.com:8081/api/v1/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
          <App />
        </BrowserRouter>
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
