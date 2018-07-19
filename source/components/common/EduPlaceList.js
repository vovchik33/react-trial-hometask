// Core
import React from 'react';

import EduPlace from "./EduPlace";

export default (props) => {
    const { data } = props;
    const eduPlacesJSX = data.map((item) => {
        const {id, degree, eduspace, period} = item;
        return (
            <EduPlace
                key={id}
                degree={degree}
                eduspace={eduspace}
                period={period}
            />
        );
    });

    return (
        <>{eduPlacesJSX}</>
    );
};