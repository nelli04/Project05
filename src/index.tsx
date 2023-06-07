import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/a1-ui/a1-app/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter basename={'/'}>
    <App />
  </HashRouter>
);

reportWebVitals();
