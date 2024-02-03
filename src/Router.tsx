import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import "@fontsource/kaushan-script";
import "@fontsource/lilita-one";
import "@fontsource/andika-new-basic";
import "@fontsource/inter";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fontsource/montserrat";
import "@fontsource/lora";
import "@fontsource/nunito-sans";
import "@fontsource/halant";
import Navbar from '@components/Navbar';
import { App } from './App';
//import PageNotFound from '@pages/PageNotFound';

function Router() {
   return (
      <BrowserRouter>
         <Navbar />
         <App />
      </BrowserRouter>
   )
}

export default Router