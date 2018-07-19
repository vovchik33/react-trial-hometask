// Core
import React from 'react';

import Mark from './Mark';

export default (props) => {
    const { title = "Неизвестный", points = 0, maxValue = 10 } = props;

    return (
        <div className='skill'>
            <span>{title}</span>
            <Mark realValue={points} maxValue={maxValue} />
        </div>
    );
};
