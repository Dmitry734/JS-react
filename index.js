import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { type } from '@testing-library/user-event/dist/type';

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<App/>
, document.getElementById('root'));

reportWebVitals();
