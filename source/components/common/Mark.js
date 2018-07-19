// Core
import React from 'react';

import Point from './Point';

export default (props) => {
    const stars = [];
    const { maxValue, realValue } = props;

    for (let i = 0; i < maxValue; i++) {
        stars.push(i < realValue);
    }

    const starsJSX = stars.map((active, index) => {
        return <Point key={index} isActive={active} />;
    });

    return (
        <ul>{starsJSX}</ul>
    );
};
