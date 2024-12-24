import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // where pages are routed. TODO later
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);