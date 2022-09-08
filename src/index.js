import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import TweetContextProvider from './context/TweetContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TweetContextProvider>
        <App />
    </TweetContextProvider>
);


