import {memo} from 'react';
import type {FC} from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import {Desktop} from './components/Desktop/Desktop';
import 'font-awesome/css/font-awesome.min.css'
import "@fontsource/kaushan-script";
import "@fontsource/lilita-one";
import "@fontsource/andika-new-basic";

interface Props {
    className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <Desktop/>
        </div>
    );
});
