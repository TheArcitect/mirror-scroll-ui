import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/tailwind.css'; // Adjusted path to your Tailwind CSS
import App from './app.jsx';     // Ensure lowercase filename matches

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
