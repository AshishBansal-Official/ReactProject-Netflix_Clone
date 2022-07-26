import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global_styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyles />
        <App />
    </>
);
