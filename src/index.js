import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxIdNwoa4Mf747hCyzNYyQceMIRjsF7Ug",
  authDomain: "dragonball-ecommerce.firebaseapp.com",
  projectId: "dragonball-ecommerce",
  storageBucket: "dragonball-ecommerce.appspot.com",
  messagingSenderId: "1003168837814",
  appId: "1:1003168837814:web:97c7e54e98c402ebebb617"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
