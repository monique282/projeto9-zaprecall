import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './reset.css';
import './style.css';

const rootElement = document.querySelector('.total');

createRoot(rootElement).render(
    <App />
    );

    