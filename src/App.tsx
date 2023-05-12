import {memo} from 'react';
import type {FC} from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import {Portfolio} from './components/Portfolio';
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
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <Portfolio/>
        </div>
    );
});
