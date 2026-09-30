import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
  document.head.appendChild(script);

  script.addEventListener('load', () => {
    if (typeof window.gtag === 'function') {
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
