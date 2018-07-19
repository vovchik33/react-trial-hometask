// Core
import React from "react";

import Contact from "./Contact";

export default (props) => {
    const { data } = props;
    const contactListJSX = data.map((item) => {
        const { id, action, address } = item;

        return <Contact action = { action } address = { address } key = { id } />;
    });

    return <>{contactListJSX}</>;
};
