// Core
import React from 'react';

import Work from './Work';

export default (props) => {
    const { data } = props;
    const workListJSX = data.map((item) => {
        const {
            id = "",
            company = "без имени",
            location = "неизвестно",
            period = "не указан",
            position = ""
        } = item;
        return (
            <Work
                key={id}
                company={company}
                location={location}
                period={period}
                position={position}
            />
        );
    })
    
    return (
        <>{workListJSX}</>
    );
};