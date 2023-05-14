import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './App';
import './components/stylesheets/resets.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
