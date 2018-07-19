// Core
import React from "react";

import EduPlace from "./EduPlace";

export default (props) => {
    const { data } = props;
    const eduPlacesJSX = data.map((item) => {
        const { id, degree, eduspace, period } = item;

        return (
            <EduPlace
                degree = { degree }
                eduspace = { eduspace }
                key = { id }
                period = { period }
            />
        );
    });

    return <>{eduPlacesJSX}</>;
};
