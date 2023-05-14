import {memo} from 'react';
import type {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import resets from './components/stylesheets/resets.module.css';
import {Index} from './components';
import {BtcApp} from './components/projects/btc-app';
import {DltApp} from "./components/projects/dlt-app";
import 'font-awesome/css/font-awesome.min.css'
import "@fontsource/kaushan-script";
import "@fontsource/lilita-one";
import "@fontsource/andika-new-basic";
import "@fontsource/inter";
import "@fortawesome/fontawesome-free/css/all.css";

interface Props {
    className?: string;
}

export const App: FC<Props> = memo(function App() {
    return (
        <div className={resets.storybrainResets}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/projects/best-tv-app" element={<BtcApp/>}/>
                    <Route path="/projects/dlt-calculator-app" element={<DltApp/>}/>
                    <Route path="/projects/konnect-app" element={<BtcApp/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
});
