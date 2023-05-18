import {memo} from 'react';
import type {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Index} from './components';
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

interface Props {
    className?: string;
}

export const App: FC<Props> = memo(function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
});
