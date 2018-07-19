// Core
import React from 'react';

export default (props) => {
    const { isActive } = props;
    const pointJSX = isActive ? <li /> : <li className='inactive' />;

    return (
        <>{pointJSX}</>
    );
};