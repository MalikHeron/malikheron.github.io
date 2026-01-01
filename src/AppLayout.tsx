import { BrowserRouter } from 'react-router-dom'
import "@fontsource/inter";
import "@fontsource/lora";
import "@fortawesome/fontawesome-free/css/all.css";
import Navbar from '@components/Navbar';
import { App } from './App';

function AppLayout() {
  return (
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  )
}

export default AppLayout

