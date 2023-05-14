import React, {useEffect} from 'react';
import type {FC} from 'react';

import resets from '../stylesheets/resets.module.css';
import classes from '../stylesheets/navigation.module.css';

interface Props {
    className?: string;
}

export const BtcApp: FC<Props> = () => {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div>Hello World</div>
        </div>
    );
};