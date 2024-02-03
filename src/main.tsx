import { initializeApp } from "firebase/app";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Router from "./Router";

// Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDDdsXP7o7Ap-Oei6fqyLIkJERhv1uFP9I",
   authDomain: "website-porfolio.firebaseapp.com",
   projectId: "website-porfolio",
   storageBucket: "website-porfolio.appspot.com",
   messagingSenderId: "327817652165",
   appId: "1:327817652165:web:cb9d001f27ff79c367cdac",
   measurementId: "G-EBWB49R5HG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// init aos
AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Router />
   </React.StrictMode>
)